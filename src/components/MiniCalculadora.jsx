import styles from './MiniCalculadora.module.css'
import NumerosCalc from './NumerosCalc'

function MiniCalculadora() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.subBox}>
                <section className={styles.inputMestre}>
                    <input type="text" value={5} disabled/>
                </section>
                <section className={styles.numbers}>
                    <NumerosCalc numero={1}/>
                    <NumerosCalc numero={2}/>
                    <NumerosCalc numero={3}/>
                    <NumerosCalc numero={'+'}/>
                    <NumerosCalc numero={4}/>
                    <NumerosCalc numero={5}/>
                    <NumerosCalc numero={6}/>
                    <NumerosCalc numero={'-'}/>
                    <NumerosCalc numero={7}/>
                    <NumerosCalc numero={8}/>
                    <NumerosCalc numero={9}/>
                    <NumerosCalc numero={'/'}/>
                    <NumerosCalc numero={0}/>
                    <NumerosCalc numero={'C'}/>
                    <NumerosCalc numero={'='}/>
                    <NumerosCalc numero={'X'}/>
                </section>
            </div>
        </div>
    )
}

export default MiniCalculadora