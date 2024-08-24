import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rate from './components/Rate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Rate/>
    </>
  )
}

export default App
