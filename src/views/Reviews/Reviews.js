export default function Reviews() {
  return <p>cfcc</p>;
}
// import { NavLink, useRouteMatch, useParams} from "react-router-dom"
// import { useState, useEffect } from "react";
// import {fetchActors} from '../../services/Api'

// export default function Cast() {
//   const [actors, setActors] = useState([]);
//   const [error, setError] = useState(null);

//   const { movieId } = useParams();

//     useEffect(() => {
//       fetchActors(movieId)
//         .then(setActors)
//         .catch((error) => setError({ error }));
//     }, [movieId]);

//     return(
//       <>
//       {actors && (
//           actors.map(actor => (
//             <li key={actor.id}>
//  <img src={`${URL}/${actor.profile_path}`} alt={actor.name} width="100px" />
//             <h4> {actor.name}</h4>
//             <p>Character{actor.character}</p>
//             </li>
//           ))
//       )}
//     </>
//   );
//   }v b
