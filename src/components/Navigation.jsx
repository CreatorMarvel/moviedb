import Input from "./Input";
import Logo from "./Logo";

import PropTypes from "prop-types";

Navigation.propTypes = {
	query: PropTypes.string,
	setQuery: PropTypes.func,
};

function Navigation({ query, setQuery }) {
	return (
		<nav className="nav-bar">
			<Logo />
			<Input query={query} setQuery={setQuery} />
		</nav>
	);
}

export default Navigation;
