import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchActors } from '../../services/Api';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    fetchActors(movieId)
      .then(setActors)
      .catch(error => setError({ error }));
  }, [movieId]);

  return (
    <>
      {actors &&
        actors.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt="Poster"
            />
            <p> {actor.name}</p>
            <p>Character:{actor.character}</p>
          </li>
        ))}
    </>
  );
}
