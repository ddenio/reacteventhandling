const Button = ({onClick, text}) => {
 
  return (
    <div>
      <button onClick={onClick}>{text}</button>
      {/* <button onClick={() => setValue(value+1)}>Add 1</button>
      {value}
      <button onClick={() => setValue(0)}>reset to zero</button> */}
    </div>
  )
}

export default Button