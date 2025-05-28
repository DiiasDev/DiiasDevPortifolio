import styles from './styles.module.css'
import CarosselExpomafee from '../../components/carrosselExpomafee/carrosselExpomafee'

export default function MyExperience() {
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.pageTitle}>
                    Minha Melhor <span className={styles.accent}>Experiência</span>
                </h2>
                 <div className={styles.underline}></div>
                <div className={styles.content}>
                    <div className={styles.card}>
                        <div className={styles.heroSection}>
                            <h3 className={styles.eventTitle}>EXPOMAFE 2025</h3>
                            <p className={styles.subtitle}>Participação em um dos maiores eventos de tecnologia de São Paulo</p>
                        </div>

                        <div className={styles.description}>
                            <p>
                                Durante o ano de 2025, tive a oportunidade excepcional de participar da EXPOMAFE,
                                um dos eventos mais prestigiosos e significativos do setor tecnológico de São Paulo.
                                Esta experiência representou um marco fundamental em minha trajetória profissional.
                            </p>

                            <p>
                                Atuando em parceria com a GRV Software, empresa onde desenvolvo minhas atividades profissionais,
                                contribuí ativamente para o desenvolvimento e implementação de um sistema abrangente de dashboards
                                empresariais. O projeto contemplou módulos estratégicos essenciais para a gestão organizacional,
                                incluindo painéis financeiros, comerciais, de faturamento, controle de estoque e gestão de compras.
                            </p>

                            <p>
                                A experiência de presenciar um projeto no qual investi dedicação, conhecimento e paixão atraindo
                                a atenção de profissionais e visitantes do evento foi profundamente gratificante. Ver o interesse
                                genuíno das pessoas pelo nosso trabalho e compreender o impacto positivo que nossa solução pode
                                proporcionar aos usuários finais foi uma fonte de imenso orgulho profissional.
                            </p>

                            <p>
                                Esta experiência consolidou minha convicção sobre o valor transformador da tecnologia quando
                                aplicada com propósito e excelência, proporcionando soluções que realmente agregam valor e
                                facilitam o cotidiano dos usuários.
                            </p>
                        </div>

                        <div className={styles.techSection}>
                            <h3>Stack Tecnológico Utilizado:</h3>
                            <div className={styles.techTags}>
                                <span className={styles.techTag}>Vue.js</span>
                                <span className={styles.techTag}>JavaScript</span>
                                <span className={styles.techTag}>Python</span>
                            </div>
                        </div>

                        <div className={styles.gallerySection}>
                            <h3>Galeria de Imagens - EXPOMAFE 2025</h3>
                            <CarosselExpomafee />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}