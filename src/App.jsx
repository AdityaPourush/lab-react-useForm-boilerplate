import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseFormHook from './Components/useFormHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseFormHook/>
    </>
  )
}

export default App
