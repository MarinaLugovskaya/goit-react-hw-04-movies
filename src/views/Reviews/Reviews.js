import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from '../../services/Api';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId)
      .then(setReviews)
      .catch(error => setError({ error }));
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <h2> Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
