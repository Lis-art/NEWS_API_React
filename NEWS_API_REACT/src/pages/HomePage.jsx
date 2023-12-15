import { useState, useEffect } from "react";

const API_KEY = api;
const Homepage = () => {
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [language, setLanguage] = useState("de");

	useEffect(() => {
		fetchNews();
	}, [searchTerm]);

	useEffect(() => {
		fetchNews();
	}, [language]);

	const LanguageChange = () => {};

	const fetchNews = () => {
		fetch(
			`http://newsapi.org/v2/everything?q=${searchTerm}&language=${language}&apiKey=${API_KEY}`
		)
			.then((response) => response.json())
			.then((items) => {
				if (items.articles) {
					setData(items.articles);
					//console.log(data.articles);
				} else {
					setData([]);
				}
			})
			.catch((error) => {
				console.log("Fehler", error);
			});
	};

	return (
		<section>
			{data.length > 0 ? (
				<div>
					{data.map((item, index) => (
						<div className="articleDiv" key={index}>
							{console.log(item)}
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
				<select
					onChange={LanguageChange}
					defaultValue={language}
					className="language"
				>
					<option value="de">Deutsch</option>
					<option value="en">English</option>
					<option value="fr">Français</option>
				</select>
				<input type="submit" id="languageBtn" value="Sprache ändern" />
			</section>

			<section>
				<input
					id="search"
					type="text"
					placeholder="Suche..."
					onChange={SearchTermChange}
					defaultValue={searchTerm}
					className="searchTerm"
				/>
				<input type="submit" id="searchBtn" value="Artikel suchen" />
				<div id="newsContainer"></div>
			</section>
		</section>
	);
};

export default Homepage;
