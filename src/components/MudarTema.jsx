import { useState } from 'react'
import styles from './MudarTema.module.css'
import { Sun, Moon } from 'lucide-react'

function MudarTema() {

    const [tema, setTema] = useState('light')

    function temas() {
        tema === 'light' ? (
            setTema('dark')
        ) : (
            setTema('light')
        )
    }


    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox} style={{
                backgroundColor: tema === 'light' ? 'white' : 'rgba(18, 17, 18, 1)'
            }}>

                <header style={{
                    backgroundColor: tema === 'light' ? 'darkgrey' : 'rgba(45, 43, 45, 1)',
                    color: tema === 'light' ? 'black' : 'white'
                }}>
                    <div style={{display: 'flex'}}>
                        <h1>Teste</h1>
                        <div style={{marginTop: '29px', marginLeft: '10px'}} onClick={temas}>
                            {tema === 'light' ? (
                                <Moon size={32}/>
                            ) : (
                                <Sun size={32}/>
                            )}
                        </div>
                        
                    </div>
                    
                </header>

                <div className={styles.underHeader} style={{
                    color: tema === 'light' ? 'black' : 'white'
                }}>
                    <aside style={{
                        backgroundColor: tema === 'light' ? 'darkgrey' : 'rgba(80, 75, 80, 1)'
                    }}>
                        <p>Teste</p>
                        
                    </aside>

                    <main style={{
                        backgroundColor: tema === 'light' ? 'darkgrey' : 'rgba(45, 43, 45, 1)'
                    }}>
                        <p>Conteudo</p>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default MudarTema