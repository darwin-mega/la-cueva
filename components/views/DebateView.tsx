import { useState, useEffect } from "react";
import { Room } from "@/lib/store";
import Timer from "../Timer";
import FallacyPanel from "../FallacyPanel";

export default function DebateView({ room, myRole, playerId, isHost, onNextPhase, onSignalFallacy }: {
    room: Room, myRole: string, playerId: string, isHost: boolean, onNextPhase: () => void, onSignalFallacy: (fId: string) => void
}) {
    const [showFallacies, setShowFallacies] = useState(false);

    const round = room.rounds[room.currentRoundIndex];
    const currentPhase = round.phases[round.currentPhaseIndex];

    // We need to calculate what's left based on turnStartTime if it exists
    const [timeRemaining, setTimeRemaining] = useState(currentPhase.durationSec);

    useEffect(() => {
        if (round.turnStartTime) {
            const elapsed = Math.floor((Date.now() - round.turnStartTime) / 1000);
            const remaining = Math.max(0, currentPhase.durationSec - elapsed);
            setTimeRemaining(remaining);
        } else {
            setTimeRemaining(currentPhase.durationSec);
        }
    }, [round.turnStartTime, currentPhase.durationSec]);

    const pA = room.players.find(p => p.id === round.debatienteA_Id);
    const pB = room.players.find(p => p.id === round.debatienteB_Id);

    const isSpeaking = myRole === currentPhase.speakerRole;

    // Recent fallacy toasts
    const [recentFallacy, setRecentFallacy] = useState<string | null>(null);

    // Effect to show toast when a new fallacy is signaled
    useEffect(() => {
        if (round.fallaciesSignaled.length > 0) {
            const last = round.fallaciesSignaled[round.fallaciesSignaled.length - 1];
            // Only show if it happened recently (within 5 seconds)
            if (Date.now() - last.timestamp < 5000) {
                setRecentFallacy(`⚠️ ¡Alguien señaló una falacia!`);
                const t = setTimeout(() => setRecentFallacy(null), 3000);
                return () => clearTimeout(t);
            }
        }
    }, [round.fallaciesSignaled.length]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1.5rem', position: 'relative' }}>
            {/* Toast Notification */}
            {recentFallacy && (
                <div style={{ position: 'fixed', top: '80px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--warning-color)', color: 'black', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)', fontWeight: 'bold', zIndex: 50, boxShadow: '0 4px 12px rgba(0,0,0,0.5)', animation: 'fadeIn 0.3s ease-out' }}>
                    {recentFallacy}
                </div>
            )}

            {/* Header Info */}
            <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-block', padding: '0.25rem 1rem', backgroundColor: 'var(--surface-hover)', borderRadius: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Ronda {round.number} • {room.duration === "corta" ? "Partida Corta" : "Partida Larga"}
                </div>

                {isSpeaking && (
                    <div className="animate-fade-in" style={{ background: 'var(--danger-color)', color: 'white', padding: '1.2rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem', boxShadow: '0 8px 20px rgba(239, 68, 68, 0.4)' }}>
                        <h1 style={{ fontSize: '1.8rem', margin: 0, textTransform: 'uppercase', lineHeight: 1.1 }}>¡TE TOCA DEBATIR!</h1>
                        <p style={{ margin: '0.5rem 0 0', fontWeight: 'bold' }}>ES TU TURNO DE HABLAR</p>
                    </div>
                )}
                <h2 className="title-serif" style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {currentPhase.name}
                </h2>
                <p style={{ color: 'var(--accent-color)', fontSize: '1.1rem', fontWeight: 600 }}>
                    Habla: {currentPhase.speakerRole === "debatiente_a" ? pA?.name : pB?.name}
                </p>
            </div>

            {/* Timer */}
            <div style={{ margin: '1rem 0' }}>
                {/* We use the remaining time calculated to keep it in sync */}
                <Timer durationSec={timeRemaining} />
            </div>

            {/* Visual Role Indicators */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', padding: '1rem', background: 'var(--surface-color)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: currentPhase.speakerRole === "debatiente_a" ? 1 : 0.4, transition: 'opacity 0.3s' }}>
                    <span style={{ fontSize: '1.5rem' }}>🔴</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: currentPhase.speakerRole === "debatiente_a" ? 700 : 400, color: 'var(--text-primary)' }}>{pA?.name}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>VS</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: currentPhase.speakerRole === "debatiente_b" ? 1 : 0.4, transition: 'opacity 0.3s' }}>
                    <span style={{ fontSize: '1.5rem' }}>🔵</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: currentPhase.speakerRole === "debatiente_b" ? 700 : 400, color: 'var(--text-primary)' }}>{pB?.name}</span>
                </div>
            </div>

            <div style={{ flex: 1 }}></div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                {/* Everyone except the current speaker can signal fallacies */}
                {!isSpeaking ? (
                    <button
                        onClick={() => setShowFallacies(true)}
                        style={{ width: '100%', padding: '1.25rem', backgroundColor: 'var(--danger-color)', color: 'white', borderRadius: 'var(--radius-md)', fontSize: '1.1rem', fontWeight: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 14px rgba(239, 68, 68, 0.4)' }}
                    >
                        ⚠️ Señalar Falacia
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            if (confirm('¿Ceder el resto de tu tiempo al siguiente orador?')) {
                                onNextPhase();
                            }
                        }}
                        style={{ width: '100%', padding: '1.25rem', backgroundColor: 'var(--surface-color)', border: '2px solid var(--accent-color)', color: 'var(--text-primary)', borderRadius: 'var(--radius-md)', fontSize: '1.1rem', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 10px rgba(99, 102, 241, 0.2)' }}
                    >
                        Terminé, paso la palabra ⏩
                    </button>
                )}

                {isHost && (
                    <button
                        onClick={onNextPhase}
                        style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', borderRadius: 'var(--radius-md)', fontSize: '1rem', fontWeight: 500 }}
                    >
                        Siguiente Turno ⏭
                    </button>
                )}
            </div>

            {/* Fallacy Panel Overlay */}
            {showFallacies && (
                <FallacyPanel
                    onClose={() => setShowFallacies(false)}
                    onSignal={onSignalFallacy}
                />
            )}
        </div>
    );
}
