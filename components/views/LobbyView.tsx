import { QRCodeCanvas } from "qrcode.react";
import { Room } from "@/lib/store";
import Logo from "@/components/Logo";

export default function LobbyView({ room, isHost, onStart }: { room: Room, isHost: boolean, onStart: () => void }) {
    // Use window.location.origin to build absolute URL if available, else fallback to relative mapping.
    const joinUrl = typeof window !== 'undefined'
        ? `${window.location.origin}/join/${room.id}`
        : `https://lajaula.app/join/${room.id}`;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center' }}>
            <Logo width={160} />
            <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Lobby de Partida</h2>

            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '100%', maxWidth: '300px' }}>
                <p style={{ color: 'var(--text-secondary)' }}>Escanea para unirte:</p>
                <div style={{ padding: '10px', background: 'white', borderRadius: '8px' }}>
                    <QRCodeCanvas value={joinUrl} size={180} />
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>O ingresa a <strong>/join/{room.id}</strong></p>
            </div>

            <div style={{ width: '100%', textAlign: 'left' }}>
                <h3 style={{ color: 'var(--text-secondary)', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                    Jugadores ({room.players.length})
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {room.players.map(p => (
                        <li key={p.id} style={{ padding: '0.75rem', background: 'var(--surface-color)', borderRadius: 'var(--radius-sm)', display: 'flex', justifyContent: 'space-between' }}>
                            <span>{p.name} {p.id === room.hostId && "👑"}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {isHost ? (
                <button
                    onClick={onStart}
                    style={{ width: '100%', padding: '1rem', background: 'var(--accent-color)', color: 'white', borderRadius: 'var(--radius-md)', fontSize: '1.1rem', fontWeight: 600, marginTop: '1rem' }}
                    disabled={room.players.length < 2}
                >
                    {room.players.length < 2 ? "Faltan jugadores..." : "Iniciar Partida"}
                </button>
            ) : (
                <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Esperando al host para iniciar...</p>
            )}
        </div>
    );
}
