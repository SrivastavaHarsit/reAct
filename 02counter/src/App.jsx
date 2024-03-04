import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // hook isiliye use kara kyuki counter change ho toh UI me har jagah counter change ho basically changes propagate karna hai

  let [counter, setCounter] = useState(5) // given a default value

  // let counter = 5;
  
  const addValue = () => {
    console.log("clicked", Math.random());
    //counter++;

    if(counter<20) counter++;
    setCounter(counter);

    // // q baar button dabane se +2 ni hoga kyuki setCounter sochega batch me kar dete hai 
    // setCounter(++counter);
    // setCounter(++counter);

    // // 1 baar neeche wala chala kar dekho 1 baar dabane se +2 add hoga setCounter 1 callback function leta hai
    // // jo uska previous state hota hai
    // setCounter((prevCounter) => prevCounter+1);
    // setCounter((prevCounter) => prevCounter+1);


  }

  const removeValue = () => {
    if(counter>0) counter--;
    setCounter(counter);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
       onClick={removeValue}
      >Subtract Value {counter}</button>
    </>
  )
}

export default App
