import styles from './Acko.module.css'
import { Link } from 'react-router-dom'
const Acko = () => {
    return (
        <Link to = "/tech-team">
        <div className={styles.techteamlink}> Made with <span className={styles.techanchor}  >Magic</span> by Tech Team </div>
        </Link>
    )
}

export default Acko;