"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

export default function CreateRoom() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        hostName: '',
        intensity: 'liviano',
        duration: 'corta'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/room', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Error al crear la sala');
            }

            // Save the playerId in localStorage so we know who we are on the game page
            localStorage.setItem(`laJaula_playerId_${data.room.id}`, data.playerId);
            localStorage.setItem(`laJaula_isHost_${data.room.id}`, 'true');

            router.push(`/room/${data.room.id}`);
        } catch (err: any) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <main className="page-container">
            <div className={styles.header}>
                <h1 className="title-serif">Crear Nueva Sala</h1>
                <p className={styles.subtitle}>Configura las reglas para el debate</p>
            </div>

            <form className={`glass-panel ${styles.form}`} onSubmit={handleSubmit}>
                {error && <div className={styles.errorMessage}>{error}</div>}

                <div className={styles.formGroup}>
                    <label htmlFor="hostName">Tu apodo (Host)</label>
                    <input
                        id="hostName"
                        type="text"
                        name="hostName"
                        required
                        maxLength={15}
                        placeholder="Ej: Sofía"
                        value={formData.hostName}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="name">Nombre de la sala</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        maxLength={20}
                        placeholder="Ej: Debate con amigxs"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="intensity">Intensidad del debate</label>
                    <select id="intensity" name="intensity" value={formData.intensity} onChange={handleChange} className={styles.select}>
                        <option value="liviano">Liviano (Temas cotidianos, fáciles de entrar)</option>
                        <option value="medio">Medio (Ética, libertad de expresión, sociedad)</option>
                        <option value="filoso">Filoso (Temas sensibles y complejos)</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="duration">Duración de la partida</label>
                    <select id="duration" name="duration" value={formData.duration} onChange={handleChange} className={styles.select}>
                        <option value="corta">Corta (Rápida, ideal para probar)</option>
                        <option value="larga">Larga (Más vueltas rotativas)</option>
                    </select>
                </div>

                <button type="submit" disabled={loading} className={styles.primaryButton}>
                    {loading ? 'Creando...' : 'Crear Sala'}
                </button>

                <Link href="/" className={styles.cancelButton}>
                    Cancelar
                </Link>
            </form>
        </main>
    );
}
