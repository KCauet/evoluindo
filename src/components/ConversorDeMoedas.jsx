import { useState } from 'react'
import styles from './ConversorDeMoedas.module.css'
import { ArrowRightLeft } from 'lucide-react'

function ConversorDeMoedas() {

    const [listaMoedas, setListaM] = useState(['BRL', 'USD'])
    const [listaCont1, setCont1] = useState(0)
    const [listaCont2, setCont2] = useState(0)

    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>
                <h2>Conversor de moedas</h2>
                <section className={styles.mainPart}>
                    <input type="number" />

                    
                    <button onClick={() => {
                        
                        if (listaCont1 < 1) {
                            setCont1((cont) => cont + 1)
                        } else {
                            setCont1(0)
                        }


                    }}>{listaMoedas[listaCont1]}</button>
                    
                    <ArrowRightLeft size={32} />

                    <button onClick={() => {
                        
                        if (listaCont2 < 1) {
                            setCont2((cont) => cont + 1)
                        } else {
                            setCont2(0)
                        }

                    }}>{listaMoedas[listaCont2]}</button>


                    
                </section>
                <p>Resultado: </p>
            </div>
        </div>
    )
}

export default ConversorDeMoedas