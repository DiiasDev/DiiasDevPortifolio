import styles from './styles.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copyright}>&copy; 2025 DiiasDev</p>
            </div>
        </footer>
    )
}