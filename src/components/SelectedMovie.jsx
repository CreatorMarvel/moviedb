import PropTypes from "prop-types";
import { useEffect, useState } from "react";

SelectedMovie.propTypes = {
	selectedMovie: PropTypes.object,
};

function SelectedMovie({ selectedMovie }) {
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		async function getGenres() {
			try {
				const response = await fetch(
					"https://api.themoviedb.org/3/genre/movie/list",
					{
						headers: {
							accept: "application/json",
							Authorization:
								"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGE2ZTUzNzRkZTk3OWI0YWU5ZmY3ODdlODdmZmIzZiIsIm5iZiI6MTczNjY2NDIwMi40MjcsInN1YiI6IjY3ODM2NDhhMTM2ZTE1N2NmMjdiMjgzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UVL71_o15hpzPB35ygOwSN2XeDnXDiawSEeva9Ryc7s",
						},
					}
				);

				if (!response.ok) {
					throw new Error("Error getting Genres");
				}

				const result = await response.json();
				setGenres(result.genres);
			} catch (error) {
				console.log(error);
			}
		}
		getGenres();
	}, [selectedMovie]);

	return (
		<div className="details">
			<header>
				<img
					src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
				/>
				<section>
					<h2>{selectedMovie.original_title}</h2>
					<p>Release &sdot; {selectedMovie.release_date}</p>
					<ul>
						{genres
							.filter((item) => selectedMovie.genre_ids.includes(item.id)) // Filter based on targetIds array
							.map((item) => (
								<li key={item.id}>{item.name}</li> // Render matching items
							))}
					</ul>
				</section>
			</header>
			<div className="details-overview">
				<p>{selectedMovie.overview}</p>
			</div>
		</div>
	);
}

export default SelectedMovie;
