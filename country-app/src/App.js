import {useState, useEffect} from "react";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Country from "./components/Country";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");


  useEffect(() => {
    axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      console.log(response.data)
      setCountries(response.data)
    }).catch(error => {
      console.error(error);
    })
  }, []);

  const handleinputChange = e => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  const filteredCountries = countries.filter(country => {
      return country.name.toLowerCase().includes(filter.toLowerCase())
    });
  

  return (
    <Router>
      <Header handleinputChange={handleinputChange}/>
      <Route exact path="/" render={() => ( <Countries filteredCountries={filteredCountries}/>)}/>
      <Route exact path={`/country/:countryId`} render={() => <Country countries={countries}/>}/>
    </Router>
  )
}

export default App

