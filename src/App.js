import { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter'
import Footer from './components/Footer';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  // ? Agregamos dos botones para aumentar y disminuir el contador
  // ? Creando una función que aumenta el contador:
  const increase = () => {
    // * setCounter: es la función que permite modificar el contador
    // * dentro de la función () indicamos el nuevo valor 'counter + 1'
    setCounter(counter + 1)
  }
  // ? Creando una función que disminuye el contador:
  const decrease = () => {
    // * dentro de la función () indicamos el nuevo valor 'counter - 1'
    setCounter(counter - 1)
  }
  
  return (
    <div className="App">
      <Header />
      <Counter counter={counter} increase={increase} decrease={decrease}/>
      <Footer />
    </div>
  );
}

export default App;
