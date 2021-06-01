import {useParams, Link} from "react-router-dom";

const Country = ({countries}) => {
  const {countryId} = useParams()
  const country = countries.find((country) => country.numericCode === countryId)
  console.log(country)
    return (
      <>
        {country ? 
          <>
            <Link to="/">Back to countries list</Link>
            <h2 className="country-name">{country.name}</h2>
            <div className="country">
              <img alt="Country flag" src={country.flag} style={{width: 400, margin: 20}}/>
              <br/>
              <p>Capital: {country.capital}</p>
              <br/>
              <p>Languages: </p>
              {country.languages.map((language, index) => {
                return (
                  <p key={index}>{language.name}</p>
                )
              })}
              <br/>
              <p>Population: {country.population}</p>
              <br/>
              <p>Currencies:</p>
              {country.currencies.map(currency => {
                return (
                  <p>{currency.name}</p>
                )
              })}
              <br/>
              <p>Region: {country.region}</p>
              <br/>
              <p>Subregion: {country.subregion}</p>
            </div>
          </>
        : ""
        }

      </>
    )
}

export default Country
