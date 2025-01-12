import MainBox from "./MainBox";
import PropTypes from "prop-types";
import MovieLists from "./MovieLists";
import ErrMessage from "./ErrMessage";
import { Box, Typography } from "@mui/material";
import SelectedMovie from "./SelectedMovie";

Main.propTypes = {
	movies: PropTypes.array,
	isLoading: PropTypes.bool,
	err: PropTypes.string,
	handleClick: PropTypes.func,
	selectedMovie: PropTypes.object,
	isSelected: PropTypes.bool,
	disableSelect: PropTypes.func,
};

function Main({
	movies,
	isLoading,
	err,
	selectedMovie,
	handleClick,
	isSelected,
	disableSelect,
}) {
	return (
		<main className="main">
			{!isSelected && (
				<MainBox>
					{movies.length === 0 && (
						<Box
							sx={{
								height: "100%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<Typography
								sx={{
									fontSize: "80px",
								}}
							>
								🍿🥤
							</Typography>
							<Typography
								sx={{
									textTransform: "uppercase",
									fontSize: "1.2rem",
									fontWeight: 600,
									letterSpacing: "2px",
								}}
							>
								MovieBox
							</Typography>
						</Box>
					)}
					{isLoading && err && <ErrMessage message={err} />}
					{!isLoading && !err && (
						<MovieLists handleClick={handleClick} movies={movies} />
					)}
					{isLoading && !err && (
						<Box
							sx={{
								width: "100%",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<div className="loader"></div>
						</Box>
					)}
				</MainBox>
			)}
			{isSelected && (
				<MainBox>
					{
						<>
							{selectedMovie && (
								<>
									<div onClick={disableSelect} className="btn-back">
										&larr;
									</div>
									<SelectedMovie selectedMovie={selectedMovie} />
								</>
							)}
						</>
					}
				</MainBox>
			)}
		</main>
	);
}

export default Main;
