import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './views/Main'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Main />
        </>
    )
}

export default App
