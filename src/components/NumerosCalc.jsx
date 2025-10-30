import styles from './NumerosCalc.module.css'

function NumerosCalc({numero}) {
    return (
        <div className={styles.mainBox}>
            
            <div className={styles.subBox}>
                <h3>{numero}</h3>
            </div>
            
        </div>
    )
}

export default NumerosCalc