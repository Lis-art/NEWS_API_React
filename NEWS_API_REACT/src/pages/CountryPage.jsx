import { useEffect, useState } from "react";

const Countrypage = () => {
    const [data, setData] = useState(null);
    const API_KEY = '9f9801e3642c482dad0d03be3fbe4e06';

    useEffect(() => {
        fetch(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.sources) {
                    setData(data.sources);
                } else {
                    setData([]);
                }
            })
            .catch((error) => {
                console.log("Fehler", error);
            });
    }, []);

    return (
        <section>
            {data ? (
                <div>
                    <h1>News</h1>
                    {data.map((item, index) => (
                        <div className="articleDiv" key={index}>
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <p>{item.category}</p>
                            <p>{item.url}</p>
                            <p>{item.country}</p>
                            <p>{item.language}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Daten werden geladen</p>
            )}
        </section>
    );
};

export default Countrypage;