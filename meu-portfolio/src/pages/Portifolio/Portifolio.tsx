import { useState } from 'react'
import ProjetosPortifolio from '../../components/projetosPortifolio/projetosPortifolio'
import styles from './styles.module.css'

export default function Portifolio() {
    const [activeFilter, setActiveFilter] = useState('Todos')

    const filters = ['Todos', 'JavaScript', 'React', 'Web Design', 'E-commerce', 'API Integration']

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter)
        // A filtragem real seria implementada no componente ProjetosPortifolio
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Portfólio</h2>
                <p className={styles.subtitle}>
                    Confira alguns dos meus projetos recentes. Cada projeto representa uma solução
                    para um problema específico, desenvolvida com as tecnologias mais atuais.
                </p>
            </div>

            <ProjetosPortifolio />
        </div>
    )
}