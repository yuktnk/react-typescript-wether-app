import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form'
import Results from './components/Results'
import Loading from './components/Loading'
import './App.css';

type ResultsStateType = {
  country: string;
  cityName: string;
  tempreature: string;
  conditionText: string;
  icon: string;
}

function App() {

  const [loading, setLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");

  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    tempreature: "",
    conditionText: "",
    icon: ""
  })

  const getWether = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://api.weatherapi.com/v1/current.json?key=c29fc09b00ac4384a0b72651211408&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          tempreature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        })
        setCity("");
        setLoading(false);
      })
      .catch(err => {
        alert("エラーが発生しました。ページをリロードしてもう一度お試しください。")
        setLoading(false);
      })
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWether={getWether} city={city}/>
        {/* <Results results={results}/> */}
        {loading ? <Loading /> : <Results results={results}/>}
      </div>
    </div>
  );
}

export default App;
