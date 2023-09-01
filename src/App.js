import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import axios from 'axios';


async function Todo() {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`); 
  return (
    await response.data
  )
};


function App() {
  const [res, setRes] = useState([]);

  useEffect(() => {
       async function dataRes() {
        const data = await Todo();
        setRes(data)
      }; 
      dataRes();
  }, []);

  return (
    <div className="App">
      <Card
        res={res}
      />
    </div>
  );
}

export default App;
