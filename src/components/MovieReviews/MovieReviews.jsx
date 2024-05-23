import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../movies-api";


export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await getReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length < 1 ? (
        <p>No reviews</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
