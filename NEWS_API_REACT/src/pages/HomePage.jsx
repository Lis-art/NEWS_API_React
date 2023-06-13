import { useState, useEffect } from "react";

const API_KEY = '9f9801e3642c482dad0d03be3fbe4e06';
const Homepage = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const [language, setLanguage] = useState("de");
   
    const SearchTermChange = (e) => {
        setSearchTerm(e.target.value)
    }
    const LanguageChange = (e) => {
        setLanguage(e.target.value)
    }

    useEffect(() => {
        fetch(`http://newsapi.org/v2/everything?q=${searchTerm}&language=${language}&apiKey=${API_KEY}`)
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
     }, [searchTerm, language]);
 
     return (
         <section>
             
             {data.length > 0 ? (
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
            <section>
                <h1>News</h1>
                <select onChange={LanguageChange} defaultValue={language} className="language">
                    <option value="de">Deutsch</option>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                </select>
                <input type="submit" id="languageBtn" value="Sprache ändern" />
            </section>

            <section>
                <input id="search" type="text" placeholder="Suche..." onChange={SearchTermChange} defaultValue={searchTerm} className="searchTerm" />
                <input type="submit" id="searchBtn" value="Artikel suchen"/>
                <div id="newsContainer"></div>
            </section>
        </section>
    );
};

export default Homepage;