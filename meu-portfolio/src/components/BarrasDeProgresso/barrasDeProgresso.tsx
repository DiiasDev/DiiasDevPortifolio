import styles from './styles.module.css';

interface BarraDeProgressoProps {
  skill: string;
  porcentagem: number;
}

export default function BarrasDeProgresso({ skill, porcentagem }: BarraDeProgressoProps) {

  //teste

  return (
    <div className={styles.skillBar}>
      <div className={styles.skillInfo}>
        <span className={styles.skillName}>{skill}</span>
        <span className={styles.skillPercent}>{porcentagem}%</span>
      </div>
      <div className={styles.progressBar}>
        <div 
          className={styles.progress} 
          style={{ width: `${porcentagem}%` }}
        ></div>
      </div>
    </div>
  );
}