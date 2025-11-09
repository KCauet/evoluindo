import { useState } from 'react'
import styles from './GerarSenhaV2.module.css'

function GerarSenhaV2() {

    const [passSize, setSize] = useState(5)
    const [upperCase, setUpper] = useState(false)
    const [specialChar, setSChar] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [password, setPass] = useState('')

    function generatePass() {
        let chars = "abcdefghijklmnopqrstuvwxyz"
        if (upperCase) {
            chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
        if (numbers) {
            chars += "0123456789"
        }
        if (specialChar) {
            chars += '!@#$%¨&*()'
        }

        let passSiz = Number(passSize)
        let readyPass = ''

        for (let i = 0; i < passSiz; i++) {
            const index = Math.floor(Math.random() * chars.length)
            const letter = chars[index]
            readyPass = readyPass + letter
        }
        setPass(readyPass)
    }

    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>
                <div>
                    <section>
                        <h2>Gerador de senhas 2.0</h2>
                        <h5>Coloque abaixo como que sua senha deverá ser montada</h5>
                    </section>
                    <section className={styles.mainForm}>
                        <div>
                            <label>Tamanho da senha</label>
                            <br />
                            <input type="number" placeholder='5' onChange={(event) => {setSize(event.target.value)}}/> 
                        </div>
                        <div>
                            <input type='checkbox' style={{marginRight: '10px'}} onChange={(event) => {setSChar(event.target.checked)}}/>
                            <label>Incluir caracteres especiais !@#$%¨&*()</label>
                        </div>
                        <div>
                            <input type='checkbox' style={{marginRight: '10px'}} onChange={(event) => {setUpper(event.target.checked)}}/>
                            <label>Incluir Maiúsculas</label>
                        </div>
                        <div>
                            <input type='checkbox' style={{marginRight: '10px'}} onChange={(event) => {setNumbers(event.target.checked)}}/>
                            <label>Incluir Números</label>
                        </div>
                        <div>
                            <button onClick={generatePass}>Criar a senha customizada</button>
                        </div>
                    </section>
                    {password}
                    <br />
                    <br />
                    <button>Copiar senha</button>
                    
                </div>
            </div>
        </div>
    )
}

export default GerarSenhaV2