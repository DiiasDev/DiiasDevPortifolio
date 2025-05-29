import imagem1 from '../../assets/images/imagem1.png'
import imagem2 from '../../assets/images/imagem2.png'
import imagem3 from '../../assets/images/imagem3.png'
import imagem4 from '../../assets/images/imagem4.png'
import imagem5 from '../../assets/images/imagem5.png'
import imagem6 from '../../assets/images/imagem6.png'
import styles from './styles.module.css'

export default function ProjetosPortifolio() {
    const projetos = [
        {
            imagem: imagem1,
            title: 'Cálculo valor final',
            category: 'JavaScript',
            description: 'Aplicação para calcular valores com diferentes taxas e juros.',
            link: 'https://github.com/DiiasDev/DescontoDeProdutos/blob/main/README.md'
        },
        {
            imagem: imagem2,
            title: 'Tabela de média',
            category: 'Web Design',
            description: 'Sistema para cálculo e visualização de médias escolares.',
            link: 'https://github.com/DiiasDev/CalculoDeMedias/blob/main/README.md'
        }, {
            imagem: imagem3,
            title: 'Conversor de moedas',
            category: 'API Integration',
            description: 'Conversor de moedas com taxas atualizadas em tempo real.',
            link: 'https://github.com/DiiasDev/conversorDeMoedas/blob/main/README.md'
        }, {
            imagem: imagem4,
            title: 'Loja de roupas online',
            category: 'E-commerce',
            description: 'Sistema completo para loja virtual de vestuário.',
            link: 'https://github.com/DiiasDev/loja_de_roupas_online/blob/main/README.md'
        }, {
            imagem: imagem5,
            title: 'Timer com JS',
            category: 'JavaScript',
            description: 'Aplicativo de cronômetro e temporizador customizável.',
            link: 'https://github.com/DiiasDev/timerProject/blob/main/README.md'
        }, {
            imagem: imagem6,
            title: 'Lista de tarefas',
            category: 'React',
            description: 'Aplicação para gerenciamento de tarefas diárias.',
            link: 'https://github.com/DiiasDev/listaDeTarefas/blob/main/README.md'
        }
    ]

    return (
        <div className={styles.container}>
            {projetos.map((projeto, index) => (
                <div key={index} className={styles.projectCard}>
                    <img
                        src={projeto.imagem}
                        alt={projeto.title}
                        className={styles.projectImage}
                    />
                    <div className={styles.overlay}>
                        <h3 className={styles.projectTitle}>{projeto.title}</h3>
                        <p className={styles.projectDescription}>{projeto.description}</p>
                        <a href={projeto.link} className={styles.projectLink}>Ver projeto</a>
                    </div>
                </div>
            ))}
        </div>
    )
}