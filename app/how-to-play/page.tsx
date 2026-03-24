import Link from 'next/link';
import styles from './page.module.css';

export default function HowToPlay() {
    return (
        <main className="page-container">
            <div className={styles.header}>
                <h1 className="title-serif">Cómo se juega</h1>
                <p className={styles.subtitle}>El paso a paso de una partida viva</p>
            </div>

            <div className={styles.steps}>
                <div className={`glass-panel animate-fade-in ${styles.stepCard}`}>
                    <h3>1. La Sala</h3>
                    <p>Una persona crea la sala y el resto escanea el QR o entra con un código numérico. Cada quien elige su nombre de participante.</p>
                </div>

                <div className={`glass-panel animate-fade-in ${styles.stepCard}`} style={{ animationDelay: '0.1s' }}>
                    <h3>2. Los Roles</h3>
                    <p>La app designa al azar a los dos debatientes de la ronda. El resto actúa como audiencia (jurado) activo.</p>
                </div>

                <div className={`glass-panel animate-fade-in ${styles.stepCard}`} style={{ animationDelay: '0.2s' }}>
                    <h3>3. El Tema</h3>
                    <p>Se presenta una afirmación debatible. Todos visualizan un contexto neutral breve y tienen un minuto para pensar antes del duelo dialéctico.</p>
                </div>

                <div className={`glass-panel animate-fade-in ${styles.stepCard}`} style={{ animationDelay: '0.3s' }}>
                    <h3>4. El Debate y las Falacias</h3>
                    <p>Hablan los debatientes por turnos guiados por el reloj. Mientras argumentan, el jurado desde su celular puede señalar silenciosamente si detecta falacias lógicas.</p>
                </div>

                <div className={`glass-panel animate-fade-in ${styles.stepCard}`} style={{ animationDelay: '0.4s' }}>
                    <h3>5. La Votación</h3>
                    <p>Al finalizar los turnos, todos votan de forma anónima a quien creen que argumentó mejor y por qué razón (claridad, solidez o capacidad de respuesta).</p>
                </div>
            </div>

            <div className={styles.actions}>
                <Link href="/" className={styles.backButton}>
                    Volver al inicio
                </Link>
                <Link href="/create-room" className={styles.primaryButton}>
                    ¡Crear una sala!
                </Link>
            </div>
        </main>
    );
}
