import { useEffect, useState } from 'react'
import styles from './MiniCalculadora.module.css'
import NumerosCalc from './NumerosCalc'

function MiniCalculadora() {

    const [numero1, setNumero1] = useState(``)
    const [numero2, setNumero2] = useState(``)
    const [operacaoAtual, setOperacao] = useState('')
    const [numeroAtual, setResultado] = useState(`${numero1} ${operacaoAtual} ${numero2}`)

    function mudarOperacao(operacao) {
        if (numero1 !== '') {
            setOperacao(operacao)
        }
    }

    function resultado() {
        let resultado = 0
        let num1 = Number(numero1)
        let num2 = Number(numero2)

        if (num2 === 0 && operacaoAtual === "/") {
            resultado = 'N/a'
        } else {
            if (operacaoAtual === "+") {
                resultado = num1 + num2
            } else if (operacaoAtual === '-') {
                resultado = num1 - num2
            } else if (operacaoAtual === '/') {
                resultado = num1 / num2
            } else {
                resultado = num1 * num2
            }
        }
        
        setNumero1(resultado)
        setNumero2('')
        setOperacao('')
    }

    function numClick(numero) {
        if (numero1 === 'N/a') {
            setNumero1('')
        }

        numero1 === '' || operacaoAtual === '' ? (
            setNumero1(numero1 + numero)
        ) : (
            setNumero2(numero2 + numero)
        )
    }

    useEffect(() => {
        setResultado(`${numero1} ${operacaoAtual} ${numero2}`)
    }, [numero1, numero2, operacaoAtual])

    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>

                <section className={styles.inputMestre}>
                    <input type="text" value={numeroAtual} disabled/>
                </section>

                <section className={styles.numbers}>
                    <NumerosCalc numero={1} funcao={() => {numClick(1)}}/>
                    <NumerosCalc numero={2} funcao={() => {numClick(2)}}/>
                    <NumerosCalc numero={3} funcao={() => {numClick(3)}}/>
                    <NumerosCalc numero={'+'} funcao={() => {mudarOperacao('+')}}/>
                    <NumerosCalc numero={4} funcao={() => {numClick(4)}}/>
                    <NumerosCalc numero={5} funcao={() => {numClick(5)}}/>
                    <NumerosCalc numero={6} funcao={() => {numClick(6)}}/>
                    <NumerosCalc numero={'-'} funcao={() => {mudarOperacao('-')}}/>
                    <NumerosCalc numero={7} funcao={() => {numClick(7)}}/>
                    <NumerosCalc numero={8} funcao={() => {numClick(8)}}/>
                    <NumerosCalc numero={9} funcao={() => {numClick(9)}}/>
                    <NumerosCalc numero={'/'} funcao={() => {mudarOperacao('/')}}/>
                    <NumerosCalc numero={0} funcao={() => {numClick(0)}}/>
                    <NumerosCalc numero={'C'} funcao={() => {
                        setNumero1('')
                        setNumero2('')
                        setOperacao('')
                    }}/>
                    <NumerosCalc numero={'='} funcao={resultado}/>
                    <NumerosCalc numero={'X'} funcao={() => {mudarOperacao('*')}}/>
                </section>

            </div>
        </div>
    )
}

export default MiniCalculadora