import Link from 'next/link';

export default function CountryCard({ countryCode, name }) {
    return (
        <li className="country-card">
            <Link
                href={`/countries/${countryCode}`}
                className="country-link"
            >
                {name}
            </Link>
        </li>
    );
} 