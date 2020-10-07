import React from 'react';
import { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css'
import logo from './logo_CDH_rojo_SinFondo.png';
import './App.css';

async function testExcercise(serverIP, excerciseNumber) {
  const url = 'http://' + serverIP + ':5000/ejercicio' + excerciseNumber;
  console.log('Testing: ' + url);
  const response = await fetch(url);
  if (response.status === 200) {
    return response.status;
  } else {
    throw ('Error');
  }
}

function TestsResults(props) {
  const pollTime = 30000;
  const [oneOK, setOneOK] = useState(false);
  const [twoOK, setTwoOK] = useState(false);
  const [threeOK, setThreeOK] = useState(false);

  useEffect(() => {
    console.log('RUNNING TESTSRESULSTS ON SERVERIP:' + props.serverIP);
    const anotherTimerId = setInterval(() => {
      testExcercise(props.serverIP, 1).then(result => setOneOK(true)).catch(err => setOneOK(false));
      testExcercise(props.serverIP, 2).then(result => setTwoOK(true)).catch(err => setTwoOK(false));
      testExcercise(props.serverIP, 3).then(result => setThreeOK(true)).catch(err => setThreeOK(false));
    }, pollTime);
    return () => clearInterval(anotherTimerId);
  }, [])

  return (
    <div className="Card">
      <div className="Row">
        <div className="text">Desafío 1</div>
        {oneOK ? <i className="fa fa-check-circle GreenTick" aria-hidden="true"></i> : <i className="fa fa-times-circle RedCircle" aria-hidden="true"></i>}
      </div>
      <div className="Row">
        <div className="text">Desafío 2</div>
        {twoOK ? <i className="fa fa-check-circle GreenTick" aria-hidden="true"></i> : <i className="fa fa-times-circle RedCircle" aria-hidden="true"></i>}
      </div>
      <div className="Row">
        <div className="text">Desafío 3</div>
        {threeOK ? <i className="fa fa-check-circle GreenTick" aria-hidden="true"></i> : <i className="fa fa-times-circle RedCircle" aria-hidden="true"></i>}
      </div>
    </div>
  )
}

function App() {
  const [serverIP, setServerIP] = useState('');
  const [serverConfigured, setServerConfigured] = useState(false);

  const handleInputChange = (event) => {
    setServerIP(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setServerConfigured(true);
  }

  return (
    <div className="App">
      <div className="Header">
        <img src={logo} />
      </div>
      <div className="Content">
        {serverConfigured ?
          <TestsResults serverIP={serverIP} /> :
          <form className="Card" onSubmit={handleSubmit}>
            <input type="text" placeholder="IP del servidor" name="serverIp" onChange={handleInputChange} />
            <input type="submit" value="Comenzar!" className="Button" />
          </form>
        }
      </div>

    </div>
  );
}

export default App;
