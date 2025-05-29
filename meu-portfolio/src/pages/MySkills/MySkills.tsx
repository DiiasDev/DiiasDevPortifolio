import BarrasDeProgresso from '../../components/BarrasDeProgresso/barrasDeProgresso';
import styles from './styles.module.css';

export default function MySkills() {
    const skills = [
        { name: "HTML", percent: 80 },
        { name: "CSS", percent: 70 },
        { name: "JavaScript", percent: 70 },
        { name: "Vue", percent: 50 },
        { name: "React", percent: 35 },
        { name: "TypeScript", percent: 60 },
        { name: "Python", percent: 40 }
    ];

    return (
        <section className={styles.skillsSection}>
            <div className={styles.container}>
                <div className={styles.skillsHeader}>
                    <h2 className={styles.title}>Minhas <span className={styles.highlight}>Habilidades</span></h2>
                    <p className={styles.subtitle}>
                        Estas são as tecnologias com as quais trabalho e desenvolvo projetos.
                        Estou sempre buscando aprimorar minhas habilidades e aprender novas tecnologias.
                    </p>
                </div>
                
                <div className={styles.skillsContent}>
                    <div className={styles.skillsBars}>
                        {skills.map((skill) => (
                            <BarrasDeProgresso 
                                key={skill.name}
                                skill={skill.name} 
                                porcentagem={skill.percent} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}