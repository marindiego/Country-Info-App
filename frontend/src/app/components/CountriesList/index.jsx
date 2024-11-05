import CountryCard from '../CountryCard';

export default function CountriesList({ countries }) {
    if (!countries.length) return <p>No countries found</p>;
    
    return (
        <ul className="countries-grid">
            {countries.map((country) => (
                <CountryCard
                    key={country.countryCode}
                    countryCode={country.countryCode}
                    name={country.name}
                />
            ))}
        </ul>
    );
} 