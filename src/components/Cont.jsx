import { useState } from 'react';

function Cont() {
    const [Num, setNum] = useState(5)

    function add() {
        setNum(Num + 1)
    }

    function rem() {
        if (Num > 0) {
            setNum(Num - 1)
        }

    }
    return (
        <div>
            <h1>{Num}</h1>
            <button onClick={add}>Aumentar</button>
            <button onClick={rem}>Diminuir</button>
        </div>
    )
}

export default Cont