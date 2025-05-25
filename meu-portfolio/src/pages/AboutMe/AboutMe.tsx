import styles from './styles.module.css'
import imagePerfil from '../../assets/images/gabrielDias.jpg'

export default function AboutMe() {
    return (
        <section className={styles.aboutMeSection}>
            <div className={styles.header}>
                <h2 className={styles.pageTitle}>
                    Sobre <span className={styles.accent}>Mim</span>
                </h2>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.imageWrapper}>
                        <img src={imagePerfil} alt="Gabriel Dias" className={styles.profileImage} />
                    </div>
                    <div className={styles.textArea}>
                        <h3 className={styles.subtitle}>
                            Desenvolvedor Frontend<br />&amp; UI Designer
                        </h3>
                        <p className={styles.description}>
                            Olá, eu me chamo <strong>Gabriel Dias</strong>, tenho 22 anos e sou de Campinas-SP.<br />
                            Atualmente estou cursando <strong>Análise e Desenvolvimento de Sistemas (ADS)</strong> na Wyden.<br />
                            Além disso, atuo como <strong>desenvolvedor P&D (Trainee)</strong>, trabalhando com <strong>JavaScript</strong> e <strong>Python</strong>.<br />
                            Utilizo frameworks como <strong>Vue</strong> e <strong>React</strong>.<br /><br />
                            Atuo principalmente na área de frontend, desenvolvendo novas páginas, melhorando páginas existentes e auxiliando colegas de equipe a entender as tecnologias utilizadas na empresa.<br />
                            Estou na área há 7 meses e já consegui ampliar minha visão técnica sobre desenvolvimento.<br /><br />
                            Espero aprender e agregar ainda mais!
                        </p>
                        <a href="https://www.instagram.com/diiassf/"> <button className={styles.button}>Saiba mais...</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}