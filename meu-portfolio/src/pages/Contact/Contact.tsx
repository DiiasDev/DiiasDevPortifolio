import Contacts from "../../components/Contacts/contacts"
import FormContact from "../../components/FormContact/formContact"
import styles from './styles.module.css'

export default function Contact() {
    //teste
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Contact</h2>
            <div className={styles.content}>
                <Contacts />
                <FormContact />
            </div>
        </div>
    )
}