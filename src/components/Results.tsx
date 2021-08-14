
type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    tempreature: string;
    conditionText: string;
    icon: string;
  }
}

const Results = ({results}: ResultsPropsType) => {
  const { cityName, country, tempreature, conditionText, icon } = results;
  return (
    <div>
      {cityName &&
        <div className="results-city">{cityName}</div>
      }

      {country &&
        <div className="results-country">{country}</div>
      }

      {tempreature &&
        <div className="results-temp">{tempreature}<span>℃</span></div>
      }

      {conditionText &&
        <div  className="results-condition">
          <img src={icon} alt="icon" />
          <span>{conditionText}</span>
        </div>
      }
    </div>
  )
}

export default Results
