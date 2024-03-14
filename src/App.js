import {useState} from 'react';
import './App.css';

function App() {

  const [colors, setColor] = useState(['#030AFA', '#FAF303' , '#0AFA03', '#FA0E03'])
  const [sequence, setSequence] = useState([])

  const handleClick = (index) => {
    randomNumber()
  }

  const randomNumber = () => {
    const minNumber = 0;
    const maxNumber = 3;
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber +1) + minNumber);
    setSequence([...sequence, randomNumber]);
  }

  return (
    
    <div>

      <header className="App-header">     
          Simon
      </header>
      <p>{sequence}</p>

      <div className="container">
      {
        colors.map((color, index) => {
          return <div key={index} 
          className={`pad pad-${index}`} 
          style={{backgroundColor:`${color}`}}
          onClick={() => handleClick(index)}
          >
          </div>
        })
      }


    </div>
    </div>

  )
}

export default App;

/*
1. Interfaz de cartón [SOLVED]
2. Detectar click en los componentes [SOLVED]
3. Crear array para almacenar la secuencia del juego [SOLVED]
4. Crear el color random para añadirlo a la secuencia
5. Reproducir la secuencia --HARD
6. Usuario intenta reproducir secuencia
7. Validar secuencia usuario por cada pulsación 
8. Si acierta l apulsación sigue el juego
9. Si no acierta el juego termina 





*/