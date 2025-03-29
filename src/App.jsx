import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [value, setValue] = useState(10)

  return (
    <div>
      <button onClick={() => setValue(value+1)}>Add 1</button>
      {value}
      <button onClick={() => setValue(0)}>reset to zero</button>
    </div>
  )
}

export default App
