

const Header = ({handleinputChange}) => {
    return (
        <div className="header">
            <h1>CountryApp</h1>
            <input type="test" placeholder="Search countries..." onChange={handleinputChange}/>
            
        </div>
    )
}

export default Header
