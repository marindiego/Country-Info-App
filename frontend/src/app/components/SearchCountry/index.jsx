'use client'
import { useState } from 'react';
import CountriesList from '../CountriesList';

export default function SearchInput({ countries }) {
    const [filteredCountries, setFilteredCountries] = useState(countries);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = countries.filter(country => 
            country.name.toLowerCase().startsWith(searchTerm)
        );
        setFilteredCountries(filtered);
    };

    return (
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    onChange={handleSearch}
                    placeholder="Search for a country" 
                />
            </div>
            <CountriesList countries={filteredCountries} />
        </>
    );
}