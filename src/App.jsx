import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import Main from "./components/Main";

export default function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [err, setError] = useState("");
	const [query, setQuery] = useState("");
	const [selectedMovie, setSelectedMovie] = useState(null);
	const [isSelected, setIsSelected] = useState(false);

	function handleClick(id) {
		const movie = movies.find((movie) => movie.id === id);
		setSelectedMovie(movie);
		setIsSelected(true);
	}

	function disableSelect() {
		setIsSelected(false);
	}

	useEffect(() => {
		async function getData() {
			try {
				setIsLoading(true);
				const response = await fetch(
					`https://api.themoviedb.org/3/search/movie?query=${query}`,
					{
						headers: {
							Authorization: `Bearer ${import.meta.env.VITE_AUTHORIZATION_KEY}`,
						},
					}
				);

				if (!response.ok) {
					throw new Error("Error fetching Data!");
				}

				const results = await response.json();
				setIsLoading(false);
				setMovies(results.results);
			} catch (error) {
				console.log(error.message);
				setError(error.message);
			}
		}
		getData();
	}, [query]);

	return (
		<>
			<Navigation query={query} setQuery={setQuery} />
			<Main
				handleClick={handleClick}
				isLoading={isLoading}
				err={err}
				movies={movies}
				selectedMovie={selectedMovie}
				isSelected={isSelected}
				disableSelect={disableSelect}
			/>
		</>
	);
}
