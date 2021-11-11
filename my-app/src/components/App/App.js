
import './App.css';

import Form from '../Form/Form';
import { useState } from 'react';
import Modal from '../Modal/Modal';


function App() {
  const [showModal, setShowModa] = useState(false)

  const handleModal = (e) => {
    setShowModa(prev => !prev);
    e.stopPropagation();

  }
  return (
    <div className="App">
      <button onClick={(e) => handleModal(e)}>setting</button>
      {showModal ? <Modal /> : ''}
    </div>
  );
}

export default App;
