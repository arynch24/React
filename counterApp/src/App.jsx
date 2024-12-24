import { useState } from 'react'


function App() {
  //use state is a hook used to make changes in the UI wherever needed without rendereing the whle tree
  //setCounter is a funnction which make changes to the counter
  let [counter, setcounter] = useState(0);//0 is the initial value
  return (
    <>
    <h1>Mai har jagah update hunga : {counter}</h1>
      <h2>Mujhe Tipo : {counter}</h2>
      <h3>Counter Value: {counter}</h3>

      <button onClick={() => {
        if (counter <25)
          setcounter(counter + 1)
      }}>
        Add Value : {counter}
      </button>
      <br />
      <br />
      <button onClick={() => {
        if (counter > 0)
          setcounter(counter - 1)
      }}>Remove Value : {counter}</button>

    </>
  )
}

export default App
