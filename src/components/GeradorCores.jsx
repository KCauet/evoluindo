import styles from './GeradorCores.module.css'
import { useState } from 'react'

function GeradorCores() {

    const [listaCores , setCores] = useState([0,0,0])
    const [savedColors, setSavedColors] = useState([])
    
    function randomizar() {
        let novosValores = []
        for (let i = 0; i < 3; i++) {
            let valor = Math.floor(Math.random() * 256)
            novosValores.push(valor)
        }
        setCores(novosValores)
    }

    function addSaved() {
        let color = `rgb(${listaCores[0]}, ${listaCores[1]}, ${listaCores[2]})`
        setSavedColors([color, ...savedColors])
    }

    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>
                <div className={styles.colorBox} style={{
                    backgroundColor: `rgb(${listaCores[0]}, ${listaCores[1]}, ${listaCores[2]})`,
                    transition: 'ease 0.75s'
                }}>
                </div>
                <div>
                    <h3>Código da cor: {listaCores}</h3>
                    <button onClick={randomizar}>Mudar cor</button>
                    <button onClick={addSaved}>Salvar cor</button>
                </div>
                <div className={styles.savedColors}>
                    {savedColors.map((cor, ID) => (
                        <div key={ID} style={{backgroundColor: cor}}>

                        </div>
                    ) ) }
                </div>
            </div>
        </div>
    )
}

export default GeradorCores