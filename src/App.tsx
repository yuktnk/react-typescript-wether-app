import { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form'
import Results from './components/Results'
import './App.css';

function App() {

  const [city, setCity] = useState<string>("");

  const getWether = (e: any) => {
    e.preventDefault();
    fetch("https://api.weatherapi.com/v1/current.json?key=c29fc09b00ac4384a0b72651211408&q=London&aqi=no")
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <div className="App">
      <Title />
      <Form setCity={setCity} getWether={getWether} />
      <Results />
    </div>
  );
}

export default App;
