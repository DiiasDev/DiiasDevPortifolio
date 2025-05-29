import { useState } from 'react'
import styles from './styles.module.css'

export default function FormContact() {
    const [mensagem, setMensagem] = useState({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        textoMensagem: ''
    })

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { id, value } = event.target
        setMensagem(prev => ({
            ...prev,
            [id === 'fullName' ? 'nome' : 
             id === 'email' ? 'email' :
             id === 'phone' ? 'telefone' :
             id === 'subject' ? 'assunto' :
             id === 'message' ? 'textoMensagem' : id]: value
        }))
    }

    function enviaMensagem(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        // Validação básica
        if (!mensagem.nome || !mensagem.email || !mensagem.textoMensagem) {
            alert('Por favor, preencha pelo menos o nome, email e mensagem.')
            return
        }
        
        const subject = encodeURIComponent(mensagem.assunto || 'Contato do Portfolio')
        const body = encodeURIComponent(
            `Nome: ${mensagem.nome}\n` +
            `Email: ${mensagem.email}\n` +
            `Telefone: ${mensagem.telefone}\n\n` +
            `Mensagem:\n${mensagem.textoMensagem}`
        )
        
        // URL do Gmail compose
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=gabriel.leoodias@gmail.com&su=${subject}&body=${body}`
        
        window.open(gmailUrl, '_blank')
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.formContent}>
                <form className={styles.form} action="" id="form" onSubmit={enviaMensagem}>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            id="fullName"
                            className={styles.input}
                            placeholder="Nome completo"
                            value={mensagem.nome}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            type="email"
                            id="email"
                            className={styles.input}
                            placeholder="Endereço de email"
                            value={mensagem.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <input
                                type="tel"
                                id="phone"
                                className={styles.input}
                                placeholder="Telefone"
                                value={mensagem.telefone}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                id="subject"
                                className={styles.input}
                                placeholder="Assunto"
                                value={mensagem.assunto}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <textarea
                            id="message"
                            className={`${styles.input} ${styles.textarea}`}
                            placeholder="Sua mensagem"
                            value={mensagem.textoMensagem}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <button type="submit" id='btn' className={styles.submitButton}>
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}