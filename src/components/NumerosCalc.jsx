import styles from './NumerosCalc.module.css'

function NumerosCalc({numero, funcao}) {

    return (
        <div className={styles.mainBox} onClick={funcao}>
            
            <div className={styles.subBox}>
                <h3>{numero}</h3>
            </div>
            
        </div>
    )
}

export default NumerosCalc