import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMovies } from "../../components/movies-api";
import MovieSearcher from "../../components/MovieSearcher/MovieSearcher";
import MoviesList from "../../components/MoviesList/MoviesList";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await searchMovies(query);
        setLoading(true);
        setMovies(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [query]);

  const handleSearch = (newQuery) => {
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  return (
    <div className={css.main}>
      <MovieSearcher onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {movies && movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <p style={{ display: query ? "block" : "none" }}>No movies found</p>
      )}
    </div>
  );
}
