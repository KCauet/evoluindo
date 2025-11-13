import { useEffect, useState } from 'react'
import styles from './Cronometro.module.css'

function Cronometro() {

    const [seg, setSeg] = useState(0)
    const [rodando, setTimer] = useState(false)
    const [textPause, setTextoP] = useState('Despausar')

    useEffect(() => {

        if (rodando) {
            let timer = setInterval(() => {
                setSeg(prev => prev + 1)
            }, 1000)

            return () => clearInterval(timer)
        }

    }, [rodando])

    function PauseDespause() {
        if (!rodando) {
            setTimer(true)
            setTextoP('Pausar')
        } else {
            setTimer(false)
            setTextoP('Despausar')
        }
    }

    function formatarTempo() {
        const minutos = Math.floor(seg / 60)
        const segundos = seg % 60
        var formatado = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`
        return formatado
    }

    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>
                <h5 style={{textAlign: 'center'}}>{formatarTempo()}</h5>
                <button onClick={PauseDespause}>{textPause}</button>
                <button onClick={() => {
                    setSeg(0)
                    setTimer(false)
                    setTextoP('Despausar')
                }}>Resetar timer</button>
            </div>
        </div>
    )
}

export default Cronometro