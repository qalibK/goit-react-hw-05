import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../movies-api";
import css from "./Cast.module.css";

export default function Cast() {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await getCast(movieId);
        setActors(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCast();
  }, [movieId]);

  return (
    <div>
      {actors && (
        <ul className={css.list}>
          {actors.map((actor) => (
            <li className={css.item} key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                  width={100}
                />
              ) : (
                <span>There is no photo</span>
              )}
              {actor.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
