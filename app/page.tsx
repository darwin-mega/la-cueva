import Link from 'next/link';
import styles from './page.module.css';
import Logo from '@/components/Logo';

export default function Home() {
    return (
        <main className={`page-container ${styles.homeContainer}`}>
            <div className={styles.heroSection}>
                <div className={`animate-fade-in ${styles.logoContainer}`} style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                    <Logo width={220} />
                </div>
                <p className={`animate-fade-in ${styles.subtitle}`}>
                    Debate, argumentación y falacias.
                </p>
                <p className={`animate-fade-in ${styles.description}`}>
                    Un juego presencial para entrenar el pensamiento crítico cara a cara.
                </p>
            </div>

            <div className={`animate-fade-in ${styles.actionSection}`}>
                <Link href="/create-room" className={styles.primaryButton}>
                    Crear sala
                </Link>
                <Link href="/how-to-play" className={styles.secondaryButton}>
                    Cómo se juega
                </Link>
            </div>
        </main>
    );
}
