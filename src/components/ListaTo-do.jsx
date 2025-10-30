import { useState } from "react"

function ListaTodo() {

    const [tarefa, setTarefa] = useState('')
    const [Lista, setLista] = useState([])

    function adicionarTarefa() {
        let texto = tarefa
        setLista([texto, ...Lista])
    }

    return (
        <div>
            <input type="text" value={tarefa} onChange={event => setTarefa(event.target.value)}/>
            {tarefa}
            <button onClick={adicionarTarefa}>Adicionar tarefa</button>
            <div>{Lista.map((Itens, ID) => (
                <div key={ID} >
                    <p>{Itens}</p>
                    <button onClick={() => {
                        setLista(Lista.filter((_, i) => i !== ID))
                    }}>Apagar</button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ListaTodo