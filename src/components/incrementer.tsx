import { useState } from "react"

export const Incrementer: React.FC<any> = (props) => {
    const [counter, setCounter] = useState<number> (0);

    return (
        <button onClick={(): void => setCounter(counter+1)}>Incrementer: {counter}</button>
    )
}

