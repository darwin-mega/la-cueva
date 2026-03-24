import { useEffect, useState } from "react";

export default function Timer({ durationSec, onComplete }: { durationSec: number, onComplete?: () => void }) {
    const [timeLeft, setTimeLeft] = useState(durationSec);

    useEffect(() => {
        setTimeLeft(durationSec);
    }, [durationSec]);

    useEffect(() => {
        if (timeLeft <= 0) {
            if (onComplete) onComplete();
            return;
        }
        const int = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearInterval(int);
    }, [timeLeft, onComplete]);

    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;

    const isUrgent = timeLeft <= 10;

    return (
        <div style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            color: isUrgent ? 'var(--danger-color)' : 'var(--accent-color)',
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(0,0,0,0.2)',
            borderRadius: 'var(--radius-md)',
            border: `1px solid ${isUrgent ? 'var(--danger-color)' : 'var(--border-color)'}`
        }}>
            {mins}:{secs < 10 ? '0' : ''}{secs}
        </div>
    );
}
