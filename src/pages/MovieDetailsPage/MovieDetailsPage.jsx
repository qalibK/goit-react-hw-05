import { useEffect, useState, Suspense } from "react";

import { useParams, Link, Outlet } from "react-router-dom";
import { getMovieById } from "../../components/movies-api";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [movieId]);

  return (
    <div className={css.container}>
      {movie && <MovieInfo movie={movie} />}
      <hr />
      <ul className={css.list}>
        <li>
          <Link className={css.link} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className={css.link} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
