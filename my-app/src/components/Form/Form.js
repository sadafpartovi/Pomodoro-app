import './Form.css'
import {useState} from 'react';

const Form = ({setPomodoro, setShort, setLong}) => {




  return (
    <div>
     <form>
    <label>Pomodoro</label>
       <input type='number'placeholder='25' onChange={(e) => setPomodoro(e.target.value)}></input>

       <label>Short Break</label>
       <input onChange={(e) => setShort(e.target.value)} type='number'placeholder='5'></input>

       <label>Long Break</label>
       <input onChange={(e) => setLong(e.target.value)} type='number'placeholder='20'></input>
     </form>


     <div>
       <h3>FONT</h3>
       <div className='italisize'>Aa</div>
       <div className='normal'>Aa</div>
       <div className='bold'>Aa</div>
     </div>


     <div>
       <h3>COLOR</h3>
       <div className='orange'></div>
       <div className='blue'></div>
       <div className='purple'></div>
     </div>

     <button className='applyBtn'>Apply</button>

    </div>



  );

};

export default Form;
