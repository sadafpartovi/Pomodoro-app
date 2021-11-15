
import './App.css';
import Form from '../Form/Form';
import { useState } from 'react';
import Timer from '../Timer/Timer'



function App() {
  const [showModal, setShowModa] = useState(false);
  const [pomodoro, setPomodoro] = useState();
  const [shortBreak, setShort] = useState();
  const [longBreak, setLong] = useState();

  const [theme, setTheme ] = useState({
    mode: 'pink',
    color: 'rgb(212, 124, 212)'
  })

  console.log(theme)

  const handleTheme = (mode) => {
    if (mode === 'pink') {
      setTheme({
        mode: 'pink',
      color: 'rgb(212, 124, 212)'
      })
    }
    else if (mode === 'orange') {
      setTheme ({
        mode: 'orange',
      color: 'rgb(233, 177, 74)'
      })
    }
     else if (mode === 'blue') {
      setTheme ({
        mode: 'blue',
      color: 'rgb(121, 218, 218)'
      })
     }
  }


  const handleModal = (e) => {
    setShowModa(prev => !prev);
    e.stopPropagation();

  }
  return (
    <div className="App">
      <h1>Pomodoro</h1>
      <div className='appHeader'>
        <p>pomodoro</p>
        <p>short break</p>
        <p>long break</p>
      </div>

      <Timer theme={theme} pomodoro={pomodoro} shortBreak={shortBreak} longBreak={longBreak}/>

      <button onClick={(e) => handleModal(e)}><i class="fa fa-cog" aria-hidden="true"></i></button>
      {showModal ? <Form  setPomodoro={setPomodoro} setShort={setShort} setLong={setLong} setShowModa={setShowModa} handleTheme={handleTheme} them={theme}/>  : ''}
    </div>
  );
}

export default App;
