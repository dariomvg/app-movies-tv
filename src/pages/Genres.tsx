import { Link } from "react-router-dom";
import "../styles/genres.css";
import { useContextMovies } from "../contexts/MoviesContext";
import { Loader } from "../components/Loader";

export default function Genres() {
  const { genres, loading } = useContextMovies();

  return (
    <section className="page-genres">
      {loading && (
        <section className="section-loader">
          <Loader />
        </section>
      )}

      {genres.length > 0 && (
        <>
          {genres.map((genre) => (
            <Link
              to={`/genre/${genre.id}/${genre.name}`}
              key={genre.id}
              className="genre">
              {genre.name}
            </Link>
          ))}
        </>
      )}
    </section>
  );
}
