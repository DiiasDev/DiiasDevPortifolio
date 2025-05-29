import styles from './styles.module.css'

export default function Contacts() {
    return (
        <div className={styles.contactsContainer}>
            <div className={styles.contactsContent}>
                <div className={styles.contactItem}>
                    <span className={styles.icon}>📞</span>
                    <span>+55 (19) 99329-2661</span>
                </div>
                <div className={styles.contactItem}>
                    <span className={styles.icon}>✉️</span>
                    <span>gabriel.leoodias@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                    <span className={styles.icon}>📸</span>
                    <a href="https://www.instagram.com/diiassf/">@diiassf</a>
                </div>
                <div className={styles.contactItem}>
                    <span className={styles.icon}>💬</span>
                    <a href="https://wa.me/5519993292661">Chame no WhatsApp</a>
                </div>
                <div className={styles.contactItem}>
                    <span className={styles.icon}>🌐</span>
                    <a href="https://github.com/DiiasDev">DiiasDev</a>
                </div>
                <div className={styles.contactItem}>
                    <span className={styles.icon}>🔗</span>
                    <a href="https://www.linkedin.com/in/gabriel-dias-8a8209255/">Gabriel Dias</a>
                </div>
            </div>
        </div>
    )
}