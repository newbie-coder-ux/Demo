import { useState } from 'react'
import './App.css'
import Demo from './components/Demo';
import Pages from '../src/Pages/Pages';
import {store} from './store'; 
import {Provider} from 'react-redux' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <Demo />
      <Pages/>
    </Provider>
      
    </>
  )
}

export default App
