import React from "react";

type FormPropsType = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWether: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ city, setCity, getWether }: FormPropsType) => {

  return (
    <form onSubmit={getWether}>
      <input type="text" name="city" placeholder="都市名を英語で入力" onChange={e => setCity(e.target.value)} value={city}/>
      <button type="submit">Get Wether</button>
    </form>
  );
}

export default Form;
