import { Typography } from "@mui/material";
import PropTypes from "prop-types";

ErrMessage.propTypes = {
	message: PropTypes.string,
};

function ErrMessage({ message }) {
	return (
		<Typography
			sx={{
				fontSize: "1.6rem",
				textAlign: "center",
				padding: "2rem",
			}}
		>
			⚠️ {message}
		</Typography>
	);
}

export default ErrMessage;
