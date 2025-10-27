import { useState } from "react"

function ListaTarefas() {

    const [Lista, setLista] = useState([])
    const [textoAtual, setText] = useState('')

    function addLista() {
        let novosValores = []
        for (let i = 0; i < 3; i++) {
            let valor = Math.floor(Math.random() * 256)
            novosValores.push(valor)
        }

        var novoObj = {
            texto: textoAtual,
            corFundo: `rgb(${novosValores[0]}, ${novosValores[1]}, ${novosValores[2]})`
        }

        setLista([novoObj, ...Lista])

    }

    return (
        <div>
            <input type="text" onChange={event => setText(event.target.value)}/>
            <button onClick={addLista}>Adicionar tarefa</button>

            <div>{Lista.map((Itens, ID) => (
                <div>
                    <p key={ID} style={{backgroundColor: Itens.corFundo}}>{Itens.texto}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ListaTarefas