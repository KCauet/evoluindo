import { useState } from "react"

function GerarSenha() {
    
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()"
    
    const [senha, setSenha] = useState('')
    const [tam, setTam] = useState('')

    function gerador() {
        var tamanhoSenha = Number(tam)
        var senhaMontada = ''

        for (let i = 0; i < tamanhoSenha; i++) {
            const indice = Math.floor(Math.random() * caracteres.length)
            const letra = caracteres[indice]
            senhaMontada = senhaMontada + letra
        }
        setSenha(senhaMontada)
    }
    
    

    return (
        <div>
            <h2>Digite o tamanho da senha que deseja</h2>
            <input type="number" id="senha" value={tam} onChange={(e) => setTam(e.target.value)}/>
            <button onClick={gerador}>GERAR</button>
            <h4>{senha}</h4>
        </div>
    )
}

export default GerarSenha