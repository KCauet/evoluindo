import styles from './Music.module.css'
import { Play } from 'lucide-react'

function MusicPlayer() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>
                <div className={styles.buttons}>
                    <button>Anterior</button>
                    <button>Play</button>
                    <Play size={32}/>
                    <button>Proxima</button>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer