import PropTypes from "prop-types";

Input.propTypes = {
	query: PropTypes.string,
	setQuery: PropTypes.func,
};

function Input({ query, setQuery }) {
	return (
		<input
			className="search"
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={(e) => setQuery(e.target.value)}
		/>
	);
}

export default Input;
