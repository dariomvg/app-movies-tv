import { CardContent } from "../components/CardContent";
import { ContainerMain } from "../components/ContainerMain";
import { useContextMovies } from "../contexts/MoviesContext";
import { ContainerUpcoming } from "../components/ContainerUpcoming";
import { CardUpcoming } from "../components/CardUpcoming";
import "../styles/main.css";

export default function Main() {
  const { movies, moviesUpcoming, series } = useContextMovies();
  return (
    <section className="page-main">
      {movies.length > 0 ? (
        <>
          <ContainerMain movie={movies[0]} />
          <section className="section-movies">
            <div className="container-movies">
              <h2 className="title-container">Last movies</h2>
              <ul className="list-content">
                {movies.map((movie) => (
                  <CardContent key={movie.id} content={movie} />
                ))}
              </ul>

              <ContainerUpcoming content={moviesUpcoming[0]} />

              <h2 className="title-container">Last series</h2>
              <ul className="list-content">
                {series.map((serie) => (
                  <CardContent key={serie.id} content={serie} />
                ))}
              </ul>
            </div>
            <aside className="aside-upcomings">
              <h2 className="title-container">Upcomings</h2>
              <ul className="list-content-upcomings">
                {moviesUpcoming.slice(0, 13).map((movie) => (
                  <CardUpcoming content={movie} key={movie.id} />
                ))}
              </ul>
            </aside>
          </section>
        </>
      ) : null}
    </section>
  );
}
