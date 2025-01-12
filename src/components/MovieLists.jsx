import MovieList from "./MovieList";
import PropTypes from "prop-types";

MovieLists.propTypes = {
	movies: PropTypes.array,
	handleClick: PropTypes.func,
};

function MovieLists({ movies, handleClick }) {
	return (
		<ul className="list">
			{movies.map((movie) => {
				return (
					<MovieList handleClick={handleClick} key={movie.id} movie={movie} />
				);
			})}
		</ul>
	);
}

export default MovieLists;
