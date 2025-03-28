import { Link, useParams } from "react-router-dom";
import { CardContent } from "../components/CardContent";
import { useActorAndGenre } from "../hooks/useActorAndGenre";
import { Loader } from "../components/Loader";
import "../styles/genres.css";

export default function Genre() {
  const { id, title } = useParams();
  if (!id) return;
  const { content, loading } = useActorAndGenre(parseInt(id), "genre");

  return (
    <section className="page-genre">
    {loading ? ( 
      <section className="section-loader">
        <Loader />
      </section>
    ) : content.length > 0 ? (
      <>
        <h1 className="title-page-genre">{title}</h1>
        <ul className="list-content-genres">
          {content.map((item) => (
            <CardContent key={item.id} content={item} />
          ))}
        </ul>
      </>
    ) : (
      <section className="section-null">
        <p className="title-null">Not encounter results</p>
        <Link to="/genres" className="link-null">Come back</Link>
      </section>
    )}
  </section>
  );
}
