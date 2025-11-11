import { useState } from 'react'
import styles from './ConversorDeMoedas.module.css'
import { ArrowRightLeft } from 'lucide-react'

function ConversorDeMoedas() {

    const [listaMoedas] = useState(['BRL', 'USD'])
    const [listaCont1, setCont1] = useState(0)
    const [listaCont2, setCont2] = useState(1)

    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>
                <h2>Conversor de moedas</h2>
                    
                <div>
                    <input type="number" />
                </div>

                <section className={styles.mainPart}>
                    
                    <button onClick={() => {
                        
                        if (listaCont1 < 1) {
                            setCont1((cont) => cont + 1)
                        } else {
                            setCont1(0)
                        }


                    }}>{listaMoedas[listaCont1]}</button>
                    
                    <ArrowRightLeft size={32} onClick={() => {

                        if (listaCont1 === 0) {
                            setCont1(1)
                            setCont2(0)
                        } else {
                            setCont1(0)
                            setCont2(1)
                        }

                    }}/>

                    <button onClick={() => {
                        
                        if (listaCont2 < 1) {
                            setCont2((cont) => cont + 1)
                        } else {
                            setCont2(0)
                        }

                    }}>{listaMoedas[listaCont2]}</button>

                </section>

                <div>
                    <input type="number" disabled={true}/>
                </div>
                
            </div>
        </div>
    )
}

export default ConversorDeMoedas