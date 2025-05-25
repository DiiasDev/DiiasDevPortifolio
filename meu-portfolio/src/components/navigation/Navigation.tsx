import { useState } from 'react';
import styles from './styles.module.css';

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <div className={styles.navContainer}>
                <nav className={styles.navbar}>
                    <div
                        className={styles.mobileMenuButton}
                        onClick={toggleMobileMenu}
                    >
                        <div className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.active : ''}`}></div>
                        <div className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.active : ''}`}></div>
                        <div className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.active : ''}`}></div>
                    </div>

                    <div className={styles.logoContainer}>
                        <span className={styles.logo}>DiasDev</span>
                    </div>

                    <div className={styles.mobileLogoContainer}>
                        <span className={styles.mobileLogo}>DiasDev</span>
                    </div>

                    <ul className={`${styles.navList} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                        <li className={styles.navItem}><a href="/" className={styles.navLink}>Home</a></li>
                        <li className={styles.navItem}><a href="/SobreMim" className={styles.navLink}>Sobre Mim</a></li>
                        <li className={styles.navItem}><a href="/Servicos" className={styles.navLink}>Serviços</a></li>
                        <li className={styles.navItem}><a href="/Habilidades" className={styles.navLink}>Habilidades</a></li>
                        <li className={styles.navItem}><a href="/Portifolio" className={styles.navLink}>Portfólio</a></li>
                        <li className={styles.navItem}><a href="/Contact" className={styles.navLink}>Contato</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}