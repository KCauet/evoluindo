import styles from './MudarTema.module.css'

function MudarTema() {


    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>
                <header>
                    <h1>Teste</h1>
                </header>

                <div className={styles.underHeader}>
                    <aside>
                        <p>Teste</p>
                    </aside>

                    <main>
                        <p>Conteudo</p>
                    </main>
                </div>

            </div>
        </div>
    )
}

export default MudarTema