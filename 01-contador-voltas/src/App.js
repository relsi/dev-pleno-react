import React, {useState, useEffect} from 'react'

const MostraVoltas = (props) => {
  return (
    <p>
      {props.voltas}<br />
      Voltas
    </p>
  )
}

const MostraTempo = (props) => {
  const tempo = props.tempo
  const minutos = Math.round(tempo / 60)
  const segundos = tempo % 60
  const minutosStr = minutos < 10 ? '0' + minutos : minutos
  const segundosStr = segundos < 10 ? '0' + segundos : segundos

  return (
    <p>
      {`${minutosStr}:${segundosStr}`}<br />
      Tempo médio por volta
    </p>
  )
}

const Button = props => <button onClick={props.onClick}>{props.text}</button>

function App() {
  
  const [numVoltas, setNumVoltas] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let timer = null

    if (running) {
      timer = setInterval(() => { 
        setTempo(old => old + 1)
      }, 10)
    }

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }

  }, [running])

  const toggleRunnig = () => {
    setRunning(!running)
  }

  const increment = () => {
    setNumVoltas(numVoltas + 1)
  }
  
  const decrement = () => {
    setNumVoltas(numVoltas - 1)
  }

  return (
    <div>
      <MostraVoltas voltas={numVoltas} />
      <Button text='+' onClick={increment} />
      <Button text='-' onClick={decrement}/>
      {
        numVoltas > 0 &&
        <MostraTempo tempo={Math.round(tempo / numVoltas)} />

      }
      <Button text='Iniciar/pausar' onClick={toggleRunnig} />
      <Button text='Reiniciar' />
    </div>
  );
}

export default App
