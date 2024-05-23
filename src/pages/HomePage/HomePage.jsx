import { useEffect, useState } from "react";
import { getMovies } from "../../components/movies-api";
import MoviesList from "../../components/MoviesList/MoviesList";
import css from "./HomePage.module.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className={css.main}>
      <h1>Trending today</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}
