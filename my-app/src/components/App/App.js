
import './App.css';
import Form from '../Form/Form';
import { useState } from 'react';



function App() {
  const [showModal, setShowModa] = useState(false);
  const [pomodoro, setPomodoro] = useState();
  const [shortBreak, setShort] = useState();
  const [longBreak, setLong] = useState()

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
      <button onClick={(e) => handleModal(e)}>setting</button>
      {showModal ? <Form  setPomodoro={setPomodoro} setShort={setShort} setLong={setLong}/> : ''}
    </div>
  );
}

export default App;
