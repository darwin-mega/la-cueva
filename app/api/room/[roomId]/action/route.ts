import { NextResponse } from "next/server";
import { getRoom, updateRoom, Round, TurnPhase, FallacySignal, generatePlayerId } from "@/lib/store";
import { topics } from "@/data/topics";

export async function POST(req: Request, { params }: { params: { roomId: string } }) {
    try {
        const roomId = params.roomId.toUpperCase();
        const room = getRoom(roomId);

        if (!room) {
            return NextResponse.json({ error: "Sala no encontrada" }, { status: 404 });
        }

        const { action, payload } = await req.json();

        switch (action) {
            case "START_GAME":
            case "NEXT_ROUND": {
                if (room.players.length < 2) {
                    return NextResponse.json({ error: "Se necesitan al menos 2 jugadores" }, { status: 400 });
                }

                // Filtrar temas por intensidad y no usados
                let availableTopics = topics.filter(t => t.intensity === room.intensity && !room.usedTopics.includes(t.id));

                // Si se agotaron, reciclar los de la misma intensidad
                if (availableTopics.length === 0) {
                    availableTopics = topics.filter(t => t.intensity === room.intensity);
                    room.usedTopics = []; // reset
                }

                const randomTopic = availableTopics[Math.floor(Math.random() * availableTopics.length)];
                room.usedTopics.push(randomTopic.id);

                // Selector de debatientes aleatorio
                const shuffled = [...room.players].sort(() => 0.5 - Math.random());
                const debA = shuffled[0];
                const debB = shuffled[1];

                const updatedPlayers = room.players.map(p => {
                    let role: "jurado" | "debatiente_a" | "debatiente_b" | "host" = "jurado";
                    if (p.id === debA.id) role = "debatiente_a";
                    else if (debB && p.id === debB.id) role = "debatiente_b";
                    else if (p.id === room.hostId) role = "host";
                    return { ...p, role };
                });

                const isCorta = room.duration === "corta";
                const phases: TurnPhase[] = [
                    { id: "pre_a", name: "Apertura A", speakerRole: "debatiente_a", durationSec: isCorta ? 60 : 90 },
                    { id: "pre_b", name: "Apertura B", speakerRole: "debatiente_b", durationSec: isCorta ? 60 : 90 },
                    { id: "rep_a", name: "Réplica A", speakerRole: "debatiente_a", durationSec: isCorta ? 45 : 60 },
                    { id: "rep_b", name: "Réplica B", speakerRole: "debatiente_b", durationSec: isCorta ? 45 : 60 }
                ];

                if (!isCorta) {
                    phases.push(
                        { id: "ca_a", name: "Contraargumento A", speakerRole: "debatiente_a", durationSec: 60 },
                        { id: "ca_b", name: "Contraargumento B", speakerRole: "debatiente_b", durationSec: 60 }
                    );
                }

                phases.push(
                    { id: "ci_a", name: "Cierre A", speakerRole: "debatiente_a", durationSec: isCorta ? 30 : 45 },
                    { id: "ci_b", name: "Cierre B", speakerRole: "debatiente_b", durationSec: isCorta ? 30 : 45 }
                );

                const newRound: Round = {
                    number: room.currentRoundIndex + 2,
                    topicId: randomTopic.id,
                    debatienteA_Id: debA.id,
                    debatienteB_Id: debB.id,
                    phases,
                    currentPhaseIndex: 0,
                    turnStartTime: null,
                    votes: {},
                    secondaryVotes: {},
                    resolutionVotes: {},
                    fallaciesSignaled: [],
                    winnerId: null
                };

                const newRounds = [...room.rounds, newRound];

                updateRoom(roomId, {
                    state: "preparation",
                    players: updatedPlayers,
                    rounds: newRounds,
                    currentRoundIndex: room.currentRoundIndex + 1,
                    usedTopics: room.usedTopics
                });

                return NextResponse.json({ success: true });
            }

            case "START_DEBATE": {
                const round = room.rounds[room.currentRoundIndex];
                round.turnStartTime = Date.now();
                updateRoom(roomId, { state: "debate", rounds: [...room.rounds] });
                return NextResponse.json({ success: true });
            }

            case "NEXT_PHASE": {
                const round = room.rounds[room.currentRoundIndex];
                if (round.currentPhaseIndex < round.phases.length - 1) {
                    round.currentPhaseIndex += 1;
                    round.turnStartTime = Date.now();
                    updateRoom(roomId, { rounds: [...room.rounds] });
                } else {
                    if (room.players.length === 2) {
                        updateRoom(roomId, { state: "resolution" });
                    } else {
                        updateRoom(roomId, { state: "voting" });
                    }
                }
                return NextResponse.json({ success: true });
            }

            case "SIGNAL_FALLACY": {
                const { playerId, fallacyId } = payload;
                const round = room.rounds[room.currentRoundIndex];

                const signal: FallacySignal = {
                    id: generatePlayerId(),
                    signaledBy: playerId,
                    fallacyId,
                    roundNumber: round.number,
                    timestamp: Date.now()
                };

                round.fallaciesSignaled.push(signal);
                updateRoom(roomId, { rounds: [...room.rounds] });
                return NextResponse.json({ success: true });
            }

            case "VOTE": {
                const { playerId, votedForId, reason } = payload;
                const round = room.rounds[room.currentRoundIndex];

                round.votes[playerId] = votedForId;
                if (reason) round.secondaryVotes[playerId] = reason;

                updateRoom(roomId, { rounds: [...room.rounds] });
                return NextResponse.json({ success: true });
            }

            case "VOTE_RESOLUTION": {
                // For 2 players
                const { playerId, vote } = payload; // vote is "A", "B", or "empate"
                const round = room.rounds[room.currentRoundIndex];

                if (!round.resolutionVotes) round.resolutionVotes = {};
                round.resolutionVotes[playerId] = vote;
                updateRoom(roomId, { rounds: [...room.rounds] });
                return NextResponse.json({ success: true });
            }

            case "CLOSE_VOTING": {
                const round = room.rounds[room.currentRoundIndex];
                let winner = "empate";

                // Logic based on player count
                if (room.players.length === 2) {
                    const votes = Object.values(round.resolutionVotes || {});
                    if (votes.length === 2 && votes[0] === votes[1]) { // Both agree
                        if (votes[0] === "A") winner = round.debatienteA_Id;
                        else if (votes[0] === "B") winner = round.debatienteB_Id;
                    }
                    // else mismatch = empate
                } else {
                    let votesA = 0;
                    let votesB = 0;
                    Object.values(round.votes).forEach(vId => {
                        if (vId === round.debatienteA_Id) votesA++;
                        if (vId === round.debatienteB_Id) votesB++;
                    });

                    if (votesA > votesB) winner = round.debatienteA_Id;
                    else if (votesB > votesA) winner = round.debatienteB_Id;
                }

                round.winnerId = winner;

                // Score distribution
                const pA = room.players.find(p => p.id === round.debatienteA_Id);
                const pB = room.players.find(p => p.id === round.debatienteB_Id);

                if (pA && pB) {
                    if (winner === pA.id) {
                        pA.score += 3;
                        pA.wins += 1;
                        if (room.players.length > 2 && Object.values(round.votes).includes(pB.id)) pB.score += 1;
                    } else if (winner === pB.id) {
                        pB.score += 3;
                        pB.wins += 1;
                        if (room.players.length > 2 && Object.values(round.votes).includes(pA.id)) pA.score += 1;
                    } else { // empate
                        pA.score += 2;
                        pB.score += 2;
                    }
                }

                updateRoom(roomId, { state: "results", rounds: [...room.rounds], players: [...room.players] });
                return NextResponse.json({ success: true });
            }

            default:
                return NextResponse.json({ error: "Acción no válida" }, { status: 400 });
        }

    } catch (error) {
        return NextResponse.json({ error: "Error de servidor" }, { status: 500 });
    }
}
