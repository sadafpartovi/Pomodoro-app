import "./Form.css";
import { useState } from "react";

const Form = ({ setPomodoro, setShort, setLong, setShowModa, handleTheme, theme }) => {
  return (
    <div className="container">
      <form className="modalBox">
        <div className="modalHeader">
          <h1 className="setting">Setting</h1>
          <button onClick={() => setShowModa(false)} className="closeModalBtn">
            X
          </button>
        </div>
        <hr></hr>
        <label>Pomodoro</label>
        <input
          type="number"
          placeholder="25"
          onChange={(e) => setPomodoro(e.target.value)}
        ></input>

        <label>Short Break</label>
        <input
          onChange={(e) => setShort(e.target.value)}
          type="number"
          placeholder="5"
        ></input>

        <label>Long Break</label>
        <input
          onChange={(e) => setLong(e.target.value)}
          type="number"
          placeholder="20"
        ></input>
      </form>

      <hr></hr>
      <h3>FONT</h3>
      <div className="fontContainer">
        <div className="italisize">Aa</div>
        <div className="normal">Aa</div>
        <div className="bold">Aa</div>
      </div>

      <hr></hr>
      <h3>COLOR</h3>
      <div className="colorContainer">
        <div onClick={() =>handleTheme('orange')}mode='orange' className="orange"></div>
        <div  onClick={() =>handleTheme('blue')} mode='blue' className="blue"></div>
        <div  onClick={() =>handleTheme('pink')} mode='pink' className="purple"></div>
      </div>

      <div className='btnContainer'>
        <button className="applyBtn">Apply</button>
      </div>
    </div>
  );
};

export default Form;
