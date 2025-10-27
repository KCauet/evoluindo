import styles from './Music.module.css'

function MusicPlayer() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>
                <div className={styles.buttons}>
                    <button>Anterior</button>
                    <button>Play</button>
                    
                    <button>Proxima</button>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer