import { useState } from 'react'
import './App.css'
import Demo from './components/Demo';
import Pages from '../src/Pages/Pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Demo />
      <Pages/>
    </>
  )
}

export default App
