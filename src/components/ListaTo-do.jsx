import { useState } from "react"
import styles from './ListaTo-do.module.css'

function ListaTodo() {

    const [tarefa, setTarefa] = useState('')
    const [Lista, setLista] = useState([])

    function adicionarTarefa() {
        let texto = tarefa
        if (texto.trim() === '') {
            return
        }

        setLista([texto, ...Lista])
        setTarefa('')
    }

    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>

                <section>
                    <input type="text" value={tarefa} onChange={event => setTarefa(event.target.value)}/>
                    <br/>
                    <button onClick={adicionarTarefa}>Adicionar tarefa</button>
                </section>
                
                <div className={styles.itens}>{Lista.map((Itens, ID) => (
                    
                    <div key={ID} className={styles.card}>
                        <div>
                            <p>{Itens}</p>
                        </div>
                        <div>
                            <button onClick={() => {
                                setLista(Lista.filter((_, i) => i !== ID))
                            }}>Apagar</button>
                        </div>
                        
                    </div>

                ))}
                </div>

            </div>
        </div>
    )
}

export default ListaTodo