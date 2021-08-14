import React from "react";

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWether: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ setCity, getWether }: FormPropsType) => {

  return (
    <form onSubmit={getWether}>
      <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
      <button type="submit">Get Wether</button>
    </form>
  );
}

export default Form;
