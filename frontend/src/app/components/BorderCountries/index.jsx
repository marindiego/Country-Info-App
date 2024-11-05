import Link from 'next/link';

export default function BorderCountries({ bordersCountriesArr }) {
    if (!bordersCountriesArr) return <p>No bordering countries</p>;

    return (
        <div className="borders-section">
            <h2>📍Bordering Countries</h2>
            <ul className="borders-list">
                {bordersCountriesArr.map((country) => (
                    <Link key={country.countryCode} href={`/countries/${country.countryCode}`}>
                        <li className="border-country">
                            <span className="border-country-commonName">
                                {country.commonName}
                            </span>
                            <span className="border-country-officialName">
                                {country.officialName}
                            </span>
                            <span className="border-country-code">
                                Code: {country.countryCode}
                            </span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}