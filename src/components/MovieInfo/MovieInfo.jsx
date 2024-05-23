import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import css from "./MovieInfo.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function MovieInfo({ movie }) {
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : "";

  const location = useLocation();
  const backLinkURLRef = useRef(location.state ?? "/movies");

  return (
    <div>
      <Link className={css.link} to={backLinkURLRef.current}>
        <IoMdArrowRoundBack /> Go Back
      </Link>
      <div className={css.movieInfo}>
        <img src={posterPath} alt={movie.title} width={300} height={400} />
        <div className={css.info}>
          <h2 className={css.title}>{movie.title}</h2>
          <p>User Score: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(" | ")}</p>
          <h3>Additional information</h3>
          <p>Release date: {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}
