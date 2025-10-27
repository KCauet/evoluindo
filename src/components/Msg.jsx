import { useState } from "react"
function Msg({Lista}) {
    
    const [msgAtual, setMsg] = useState("Eu vou ser trocado :<")
    const [reps, setReps] = useState(0)
    // testando o adicionamento

    function Randomize() {
        const indice = Math.floor(Math.random() * Lista.length);
        if (Lista[indice] !== msgAtual) {
            setMsg(Lista[indice])
        } else {
            setReps(reps + 1)
        }

    }

    return (
        <div>
            <button onClick={Randomize}>Clique</button>
            <h2>{msgAtual}</h2>
            <h3>Repetidos: {reps}</h3>
        </div>
    )
}

export default Msg