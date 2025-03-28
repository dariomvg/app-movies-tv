import { Link, useParams } from "react-router-dom";
import { CardContent } from "../components/CardContent";
import "../styles/actor.css";
import { useActorAndGenre } from "../hooks/useActorAndGenre";
import { Loader } from "../components/Loader";

export default function Actor() {
  const { id, title } = useParams();
  if (!id) return;
  const { content, loading } = useActorAndGenre(parseInt(id), "actor");

  return (
    <section className="page-actor">
      {loading ? (
        <section className="section-loader">
          <Loader />
        </section>
      ) : content.length > 0 ? (
        <>
          <h1 className="title-actor">Movies of {title}</h1>

          <ul className="container-content-actor">
            {content.map((item) => (
              <CardContent key={item.id} content={item} />
            ))}
          </ul>
        </>
      ) : (
        <section className="section-null">
          <p className="title-null">{loading ? "" : "Not encounter results"}</p>
          <Link to="/" className="link-null">
            Come back
          </Link>
        </section>
      )}
    </section>
  );
}
