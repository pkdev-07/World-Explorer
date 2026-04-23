import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CountryDetail.css';
import ShimmerDetail from './ShimmerDetail';

export default function CountryDetail() {
    const { country } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [allCountries, setAllCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const getFirstUrl = (str) => str?.split(',')[0].trim() || '';

    useEffect(() => {
        const fetchAllCountries = async () => {
            try {
                const res = await fetch('https://localhost:7026/api/Get_Country');
                const json = await res.json();
                setAllCountries(json);
            } catch {
                setAllCountries([]);
            }
        };
        fetchAllCountries();
    }, []);

    useEffect(() => {
        const fetchCountry = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://localhost:7026/api/Get_Country?name=${country}`);
                const json = await res.json();

                const countryData = Array.isArray(json)
                    ? json.find(c => c.name.toLowerCase() === country.toLowerCase())
                    : json;

                setData(countryData || null);
            } catch {
                setData(null);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
        };

        fetchCountry();
    }, [country]);

    if (loading) return <ShimmerDetail />;

    if (!data) return <p>Country not found</p>;

    // Get neighbor countries from borders
    const neighbors = data.borders
        ? data.borders.split(',').map((code) => {
            const neighbor = allCountries.find((c) => c.cca3 === code.trim());
            return neighbor ? neighbor.name : code.trim();
        })
        : [];

    return (
        <main>
            <button className="back-button" onClick={() => navigate('/')}>← Back</button>

            <div className="country-detail-container">
                <div className="country-images">
                    <img src={getFirstUrl(data.flags)} alt={data.name} className="country-flag" />
                    {data.coat_of_arms && (
                        <img src={getFirstUrl(data.coat_of_arms)} alt="Coat of arms" className="coat-of-arms" />
                    )}
                </div>

                <div className="country-detail-info">
                    <div className="info-column">
                        <h1>{data.name}</h1>
                        <p><strong>Official Name:</strong> {data.official_name}</p>
                        <p><strong>Population:</strong> {data.population?.toLocaleString()}</p>
                        <p><strong>Region:</strong> {data.region}</p>
                        <p><strong>Subregion:</strong> {data.subregion}</p>
                        <p><strong>Capital:</strong> {data.capital}</p>
                    </div>

                    <div className="info-column">
                        <p><strong>Languages:</strong> {data.languages}</p>
                        <p><strong>Currencies:</strong> {data.currencies}</p>
                        <p><strong>Area:</strong> {data.area?.toLocaleString()} km²</p>
                        <p><strong>Continents:</strong> {data.continents}</p>
                        {data.maps && (
                            <p><strong>Google Maps:</strong> <a href={data.maps} target="_blank" rel="noreferrer">View</a></p>
                        )}
                    </div>

                    {neighbors.length > 0 && (
                        <div className="neighbors">
                            <p><strong>Neighboring Countries:</strong></p>
                            <div className="neighbor-list">
                                {neighbors.map((n) => (
                                    <button
                                        key={n}
                                        className="neighbor-button"
                                        onClick={() => navigate(`/${n}`)}
                                    >
                                        {n}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}



