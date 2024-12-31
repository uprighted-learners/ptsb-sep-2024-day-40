import { useState } from 'react'
import Points from './Points'

export default function Counter() {
    // initialize state with the useState hook
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <Points count={count} />
            <button onClick={increment}>Add Point</button>
            <button onClick={decrement}>Decrease Point</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
