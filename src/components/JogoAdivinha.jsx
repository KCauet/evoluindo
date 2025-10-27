import { useEffect, useState } from 'react'
import styles from './JogoAdivinha.module.css'

function JogoAdivinha() {

    const [Num, setNum] = useState(0)
    const [Tentativa, setTent] = useState(0)
    const [texto, setText] = useState('Chuta um numero entre 0 e 100 :>')
    const [color, setColor] = useState('black')
    const [numTents, setTents] = useState(0)
    const [desafio, setDesafio] = useState(false)
    const [textoDesafio, setTextoDes] = useState('Modo desafio')
    const [inputValue, setInput] = useState()

    function numeroRandom() {
        var num = Math.floor(Math.random() * 101)
        setNum(num)
    }

    function checkNum() {
        var Tentativ = Number(Tentativa)
        if (texto !== 'Parabens você acertou o numero') {
            setTents(numTents + 1)
        }

        // resolver dps
        if (Tentativa === '' || isNaN(Tentativa)) {
            setText('Digite um número primeiro :/')
            return;
        }

        if (Tentativ > Num) {
            setColor('3px solid red')
            setText('Hmm... Alto demais')
        } else if (Tentativ < Num) {
            setColor('3px solid red')
            setText('Hmm... Baixo demais')
        } else {
            setText('Parabens você acertou o numero')
            setColor('3px solid green')
        }

        var outraTenta = numTents + 1
        if (desafio && outraTenta > 9) {
            setText(`Acabou as tentativas, o numero era ${Num}!`)
        }
        
    }

    function tentarDnv() {
        setText('Bora denovo, Chuta um numero entre 0 e 100 :>')
        setColor('1px solid darkgrey')
        resetAll()
    }

    function modoDesafio() {
        if (desafio) {
            setDesafio(false)
            setText('Ok então, vamos normal mesmo :>')
            setTextoDes('Modo desafio')
            resetAll()
        } else {
            setDesafio(true)
            setText('Agora ficou mais legal, tenta aí')
            setTextoDes('Modo normal')
            resetAll()
        }
        
    }

    function resetAll() {
        setTents(0)
        setTent(0)
        numeroRandom()
        setInput(``)
    }

    useEffect(() => {
        numeroRandom()
    }, [])

    return (
        <div className={styles.box}>
            <div className={styles.subBox} style={{border: color}}>
                <input type="Number" value={inputValue} max='100' min='0' onChange={ event => {setTent(event.target.value); setInput(event.target.value)} } />
                <p>{texto}</p>
                <p>Total de Tentativas: {numTents}</p>
                <button onClick={checkNum} disabled={ (numTents > 9 && desafio) || (texto === 'Parabens você acertou o numero') }>Tentar</button>
                <button onClick={tentarDnv}>Mudar numero</button>
                <button onClick={modoDesafio}>{textoDesafio}</button>
            </div>
            
        </div>
    )
}

export default JogoAdivinha