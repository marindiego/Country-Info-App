import './styles.css';
import SearchCountryInput from "../components/SearchCountry";

const getAvailableCountries = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    return await fetch(`${API_URL}/api/countries`).then((res) => res.json());
}

export default async function CountriesPage() {
    const countries = await getAvailableCountries();
    return (
        <section className="countries-section">
            <h1 className="countries-title">Country Info App</h1>
            <SearchCountryInput countries={countries} />
        </section>
    )
}