import PopulationChart from "@/app/components/PopulationChart";
import Image from "next/image";
import Link from "next/link";
import './styles.css';
import BorderCountries from "@/app/components/BorderCountries";

async function getCountryInfo(code) {
    return await fetch(`http://localhost:3001/api/countries/${code}`).then((res) => res.json());
}

export default async function CountryInfoPage({ params }) {
    const { code } = params;
    const country = await getCountryInfo(code);

    return (
        <section className="country-detail">
            <div className="country-header">
                <Link href="/countries" className="back-button">
                    ← Back to Countries
                </Link>
                {country.flagUrl && (
                    <div className="flag-container">
                        <Image
                            src={country.flagUrl}
                            width={300}
                            height={150}
                            alt={`Flag of ${country.name}`}
                            priority
                        />
                    </div>
                )}
            </div>
            <h1 className="country-name">{country.name}</h1>

            <div className="population-section">
                <h2>👥Population Over Time</h2>
                <PopulationChart populationData={country.populationData} />
            </div>

            <BorderCountries bordersCountriesArr={country.borders} />
        </section>
    );
}