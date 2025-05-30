import styles from './styles.module.css';

export default function ButttonDonwload() {
    return (
        <>
            <button className={styles.downloadButton}>
                <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM0 16V11H2V14H14V11H16V16H0Z" 
                        fill="currentColor"
                    />
                </svg>
                Baixar CV
            </button>
        </>
    )
}