import { useState } from 'react';

const Form = () => {

  const [city, setCity] = useState<string>("");

  const getWether = (e: any) => {
    e.preventDefault();
    fetch("https://api.weatherapi.com/v1/current.json?key=c29fc09b00ac4384a0b72651211408&q=London&aqi=no")
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <form>
      <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
      <button onClick={getWether}>Get Wether</button>
    </form>
  );
}

export default Form;
