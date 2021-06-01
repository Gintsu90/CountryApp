import { Link } from "react-router-dom";

const Countries = ({ filteredCountries }) => {
    
    return (
        <>
            <ul className="country-list">
                {filteredCountries.map((country, index) => {
                    return (
                        <Link key={country.numericCode} to={`country/${country.numericCode}`}>
                            <li className="country-card" key={country.numericCode}>
                                {country.name}
                                <img  className="country-flag" src={country.flag} alt="Country flag"/>
                            </li>
                        </Link> 
                    );
                })}
                
            </ul>
                
        </>
    )
}

export default Countries
