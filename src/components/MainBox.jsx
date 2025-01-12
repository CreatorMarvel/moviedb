import { useState } from "react";
import PropTypes from "prop-types";

MainBox.propTypes = {
	children: PropTypes.object,
};

function MainBox({ children }) {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="box">
			<button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
				{isOpen ? "–" : "+"}
			</button>
			{isOpen && children}
		</div>
	);
}

export default MainBox;
