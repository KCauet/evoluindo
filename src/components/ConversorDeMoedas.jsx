import { useState } from 'react'
import styles from './ConversorDeMoedas.module.css'

function ConversorDeMoedas() {

    const [listaMoedas1, setDisplay1] = useState(true)
    const [listaMoedas2, setDisplay2] = useState(false)

    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>
                <h2>Conversor de moedas</h2>
                <section className={styles.mainPart}>
                    <input type="number" />

                    
                    <button onClick={() => {
                        if (listaMoedas1) {
                            setDisplay1(false)
                        } else {
                            setDisplay1(true)
                        }
                    }}>moeda1</button>

                    
                    
                    <button onClick={() => {
                        if (listaMoedas2) {
                            setDisplay2(false)
                        } else {
                            setDisplay2(true)
                        }
                    }}>moeda2</button>

                    <section className={styles.divListas} style={{position: 'absolute', marginLeft: '200px'}}>

                        {listaMoedas1 ? (
                            <div className={styles.listasEscolha}>
                                <p>Teste</p>
                            </div>
                        ) : (
                            <br />
                        )}

                        {listaMoedas2 ? (
                            <div className={styles.listasEscolha}>
                                <p>Teste</p>
                            </div>
                        ) : (
                            <br />
                        )}

                    </section>
                </section>
                <p>Resultado: </p>
            </div>
        </div>
    )
}

export default ConversorDeMoedas