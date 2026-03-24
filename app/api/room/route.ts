import { NextResponse } from "next/server";
import { createRoom, generatePlayerId, Room } from "@/lib/store";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, intensity, duration, hostName } = body;

        if (!name || !intensity || !duration || !hostName) {
            return NextResponse.json({ error: "Faltan datos requeridos" }, { status: 400 });
        }

        const hostId = generatePlayerId();

        const newRoomData: Omit<Room, "id" | "createdAt"> = {
            name,
            intensity,
            duration,
            state: "lobby",
            hostId,
            players: [
                {
                    id: hostId,
                    name: hostName,
                    role: "jurado",
                    isHost: true,
                    score: 0,
                    wins: 0
                }
            ],
            rounds: [],
            currentRoundIndex: -1,
            usedTopics: []
        };

        const room = createRoom(newRoomData);

        return NextResponse.json({ room, playerId: hostId });
    } catch (error) {
        return NextResponse.json({ error: "Error al crear la sala" }, { status: 500 });
    }
}
