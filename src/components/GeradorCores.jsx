import styles from './GeradorCores.module.css'

function GeradorCores() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>
                <div className={styles.colorBox}>

                </div>
                <div>
                    <h3>Código da cor: </h3>
                    <button>Mudar cor</button>
                </div>
            </div>
        </div>
    )
}

export default GeradorCores