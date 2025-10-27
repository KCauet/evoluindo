import { useState, useEffect } from "react"

function CoresRandom() {

    const [listaCores , setCores] = useState([0,0,0])

    function randomizar() {
        let novosValores = []
        for (let i = 0; i < 3; i++) {
            let valor = Math.floor(Math.random() * 256)
            novosValores.push(valor)
        }
        setCores(novosValores)
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            randomizar(); // muda a cor
        }, 1000); // 1000ms = 1 segundo
        
        return () => clearInterval(intervalo);
    }, []); // o [] faz o efeito rodar só uma vez


    return (
        <div style={{
            backgroundColor: `rgb(${listaCores[0]}, ${listaCores[1]}, ${listaCores[2]})`,
            height: '50vh',
            transition: "background-color 0.75s ease"
        }} onClick={randomizar}>
            <button onClick={randomizar}>Randomizar</button>
        </div>
    )
}

export default CoresRandom