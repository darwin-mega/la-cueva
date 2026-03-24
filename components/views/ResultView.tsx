import { Room } from "@/lib/store";
import { fallacies } from "@/data/fallacies";

export default function ResultView({ room, isHost, onNextRound }: { room: Room, isHost: boolean, onNextRound: () => void }) {
    const round = room.rounds[room.currentRoundIndex];
    const pA = room.players.find(p => p.id === round.debatienteA_Id);
    const pB = room.players.find(p => p.id === round.debatienteB_Id);

    let votesA = 0;
    let votesB = 0;
    Object.values(round.votes).forEach(vId => {
        if (vId === round.debatienteA_Id) votesA++;
        if (vId === round.debatienteB_Id) votesB++;
    });

    const totalFallacies = round.fallaciesSignaled.length;

    // Aggregate fallacies for UI
    const fallacyCounts: Record<string, number> = {};
    round.fallaciesSignaled.forEach(f => {
        fallacyCounts[f.fallacyId] = (fallacyCounts[f.fallacyId] || 0) + 1;
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', animation: 'fadeIn 0.5s ease-out' }}>
            <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-color)', textAlign: 'center' }}>🏆 Tabla de Posiciones</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[...room.players].sort((a, b) => b.score - a.score).map((p, idx) => (
                        <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                            <span style={{ fontWeight: 600 }}>{idx + 1}. {p.name}</span>
                            <span>{p.score} pts ({p.wins} {p.wins === 1 ? 'voto' : 'victorias'})</span>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <h2 className="title-serif" style={{ fontSize: '2rem', color: round.winnerId === 'empate' ? 'var(--warning-color)' : 'var(--success-color)', marginBottom: '0.5rem' }}>
                    {round.winnerId === 'empate' ? '¡Empate!' : '¡Tenemos un Ganador!'}
                </h2>
                {round.winnerId !== 'empate' && (
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                        El jurado ha decidido que <strong style={{ color: round.winnerId === round.debatienteA_Id ? '#ef4444' : '#3b82f6' }}>{round.winnerId === round.debatienteA_Id ? pA?.name : pB?.name}</strong> argumentó mejor.
                    </p>
                )}
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: round.winnerId === pB?.id ? 0.5 : 1 }}>
                    <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔴</span>
                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{pA?.name}</span>
                    <span style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{votesA} votos</span>
                </div>
                <div style={{ width: '1px', background: 'var(--border-color)', height: '80px' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: round.winnerId === pA?.id ? 0.5 : 1 }}>
                    <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔵</span>
                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{pB?.name}</span>
                    <span style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{votesB} votos</span>
                </div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--warning-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    ⚠️ Revisión de Falacias
                </h3>

                {totalFallacies === 0 ? (
                    <p style={{ color: 'var(--text-secondary)' }}>¡Un debate muy limpio! No se detectaron fallos lógicos graves.</p>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Se señalaron {totalFallacies} posibles falacias:</p>
                        {Object.entries(fallacyCounts).map(([fid, count]) => {
                            const fData = fallacies.find(f => f.id === fid);
                            return (
                                <div key={fid} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', background: 'var(--surface-color)', borderRadius: 'var(--radius-sm)' }}>
                                    <span>{fData?.name}</span>
                                    <span style={{ color: 'var(--warning-color)', fontWeight: 600 }}>x{count}</span>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {isHost ? (
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <button
                        onClick={onNextRound}
                        style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--accent-color)', color: 'white', borderRadius: 'var(--radius-md)', fontSize: '1.1rem', fontWeight: 600 }}
                    >
                        Pasar a Siguiente Ronda ⏭
                    </button>
                    <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>O puedes salir para terminar el juego.</p>
                </div>
            ) : (
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '1rem' }}>Esperando que el host inicie una nueva ronda...</p>
            )}
        </div>
    );
}
