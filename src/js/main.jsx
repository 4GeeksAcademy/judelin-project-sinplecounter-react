import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from './components/SecondsCounter';

let root = ReactDOM.createRoot(document.getElementById('root'))

let counter = 0;
setInterval(() => {
 
  const numberSix = Math.floor((counter / 100000) % 10)
  const numberFive = Math.floor((counter / 10000) % 10)
  const numberFour = Math.floor((counter / 1000) % 10)
  const numberThree = Math.floor((counter / 100) % 10)
  const numberTwo = Math.floor((counter / 10) % 10)
  const numberOne = Math.floor((counter / 1) % 10)

  counter++
  root.render(
    <React.StrictMode>
      <SecondsCounter digitOne={numberOne} digitTwo={numberTwo} digitThree={numberThree}
        digitFour={numberFour} digitFive={numberFive} digitSix={numberSix}
      />
    </React.StrictMode>,
  )
}, 1000)


