import { CardContent } from "../components/CardContent";
import { Loader } from "../components/Loader";
import { useContextMovies } from "../contexts/MoviesContext";
import "../styles/upcoming.css";

export default function Upcoming() {
  const { moviesUpcoming, loading } = useContextMovies();
  return (
    <section className="page-upcomings">
      {loading && (
        <section className="section-loader">
          <Loader />
        </section>
      )}

      {moviesUpcoming.length > 0 && (
        <>
          <h1 className="title-page-upcoming">List movies</h1>
          <ul className="container-page-upcoming">
            {moviesUpcoming.map((item) => (
              <CardContent key={item.id} content={item} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
