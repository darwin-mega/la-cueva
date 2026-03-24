import { useState } from "react";
import { Room } from "@/lib/store";
import { getFallacies } from "@/data/fallacies";

export default function FallacyPanel({ onSignal, onClose }: { onSignal: (fId: string) => void, onClose: () => void }) {
    const fallacies = getFallacies();
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'var(--bg-color)',
            zIndex: 100,
            padding: 'var(--spacing-4)',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                <h2 className="title-serif" style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>Detectar Falacia</h2>
                <button onClick={onClose} style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', padding: '0.5rem' }}>✕</button>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Si detectas que el orador actual cometió un error lógico, señálalo. Esto no detendrá el cronómetro, solo quedará registrado.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {fallacies.map(f => {
                    const isExpanded = expandedId === f.id;
                    return (
                        <div key={f.id} className="glass-panel" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', borderColor: isExpanded ? 'var(--accent-color)' : 'var(--border-color)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>{f.name}</h3>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>{f.technicalName}</span>
                                </div>
                                <button
                                    onClick={() => {
                                        onSignal(f.id);
                                        onClose();
                                    }}
                                    style={{
                                        backgroundColor: 'var(--danger-color)',
                                        color: 'white',
                                        padding: '0.5rem 1rem',
                                        borderRadius: 'var(--radius-sm)',
                                        fontWeight: 600,
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    ¡Señalar!
                                </button>
                            </div>

                            {isExpanded ? (
                                <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}><strong>Definición:</strong> {f.definition}</p>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}><em>"{f.example}"</em></p>
                                    <button onClick={() => setExpandedId(null)} style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--accent-color)', textDecoration: 'underline' }}>Ocultar info</button>
                                </div>
                            ) : (
                                <button onClick={() => setExpandedId(f.id)} style={{ alignSelf: 'flex-start', fontSize: '0.8rem', color: 'var(--accent-color)', textDecoration: 'underline', marginTop: '0.25rem' }}>
                                    Ver info y ejemplo
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
