/* import { useEffect, useState } from "react";
import Homepage from "./HomePage";

const API_KEY = '9f9801e3642c482dad0d03be3fbe4e06';

const Countrypage = () => {
    const [data, setData] = useState("");
    const [searchterm, setSearchTerm] = useState("")
    const API_KEY = '9f9801e3642c482dad0d03be3fbe4e06';

     const SearchTerm = (e) => {
       setSearchTerm(e.target.value)
    }  
    
    useEffect(() => {
       //fetch(`http://newsapi.org/v2/everything?q=${searchTerm}&language=${lang}&apiKey=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.articles) {
                    setData(data.articles);
                    //console.log(data.articles);
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
                    
                    {data.map((item, index) => (
                        <div className="articleDiv" key={index}>
                            console.log({item});
                            <p>{item.name}</p>
                            <p>{item.author}</p>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>{item.url}</p>
                            <p>{item.urlToImage}</p>
                            <p>{item.publishedAt}</p>
                            <p>{item.content}</p>
                        </div>
                        
                    ))}
                </div>
            ) : (
                <p>Daten werden geladen</p>
            )}
        </section>
    );
};

export default Countrypage; */