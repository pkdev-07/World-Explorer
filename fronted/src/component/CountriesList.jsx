import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CountriesList.css";
import Shimmer from "./shimmer";

export default function CountriesList() {
    const [countries, setCountries] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAllCountries = async () => {
            try {
                //  Try fetching countries from backend
                const res = await fetch("https://localhost:7026/api/Get_Country");
                let data = await res.json();

                //  If backend has no countries, fetch from RestCountries
                if (!data || data.length === 0) {
                    const apiRes = await fetch(
                        "https://restcountries.com/v3.1/independent?status=true"
                    );
                    const apiData = await apiRes.json();

                    // Format API data simply
                    data = apiData.map((c) => ({
                        name: c.name?.common || "",
                        population: c.population || 0,
                        region: c.region || "",
                        capital: c.capital ? c.capital.join(", ") : "",
                        flags: c.flags?.svg || "",
                    }));
                }

                // Save to state
                setCountries(data);
            } catch (err) {
                console.error("Error fetching countries:", err);
                setCountries([]);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);

            }
        };

        fetchAllCountries();
    }, []);

    // Filter countries based on search query
    const filtered = countries.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="countries-container">
            {/* Search  */}
            <input
                type="text"
                placeholder="Search for a country..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />

            {/* List of  countries */}
            <div className="country-list">
                {loading ?
                    (Array(8).fill(null).map((_, i) => <Shimmer key={i} />)
                    ) : filtered.length > 0 ? (
                        filtered.map((country, index) => (
                            <div
                                key={index}
                                className="country-card"
                                onClick={() => navigate(`/${country.name}`, { state: country })}
                            >
                                <img
                                    src={country.flags}
                                    alt={country.name}
                                />
                                <div className="country-card-content">
                                    <h3>{country.name}</h3>
                                    <p>Population: {country.population.toLocaleString() || "N/A"}</p>
                                    <p>Region: {country.region || "N/A"}</p>
                                    <p>Capital: {country.capital || "N/A"}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No country found</p>
                    )}
            </div>
        </div>
    );
}

