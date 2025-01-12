import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import "./App.css";

export default function App() {
	const [movies, setMovies] = useState([]); // Movie list
	const [isLoading, setIsLoading] = useState(false); // For loading animation
	const [err, setError] = useState(""); // Set the Error Message
	const [query, setQuery] = useState(""); // Query from the Input field
	const [selectedMovie, setSelectedMovie] = useState(null); // Initial is null, set to movie object when clicked from the list
	const [isSelected, setIsSelected] = useState(false);

	function handleClick(id) {
		// Click the movie and get its ID
		// Find the movie with Unique ID
		// Set movie as state (selected)
		// Toggle isSelected if a movie is actively clicked from the list
		const movie = movies.find((movie) => movie.id === id);
		setSelectedMovie(movie);
		setIsSelected(true);
	}

	function disableSelect() {
		setIsSelected(false); // Set is selected back to false, when movie is deselected
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
	}, [query]); // Update with Query Change

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
