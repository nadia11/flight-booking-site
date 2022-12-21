import logo from './logo.svg';
import React, {useRef, useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Form from './components/Form'

import flightData from './data/data.json'

function App() {
const data = useRef([]);

useEffect(()=> {
  data.current = flightData;
})



  return (
    <div className="App">

      <Navbar/>
      <Form data={data}/>


    </div>
  );
}

export default App;
