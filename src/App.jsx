import { useState } from 'react'
import Button from './button'
import Display from './Display'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [value, setValue] = useState(10)

  const add1Click = () => setValue(value+1)
  const remove1Click = () => setValue(value-1)
  const resetClick = () => setValue(0)

  return (
    <div>
      <Button onClick={add1Click} text="Add 1" />
      <Display value={value} />
      <Button onClick={remove1Click} text="Remove 1" />
      <Button onClick={resetClick} text="Reset" />
      {/* <button onClick={() => setValue(value+1)}>Add 1</button>
      {value}
      <button onClick={() => setValue(0)}>reset to zero</button> */}
    </div>
  )
}

export default App
