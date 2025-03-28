import { useParams } from "react-router-dom";
import "../styles/search.css";
import { useSearch } from "../hooks/useSearch";
import { CardContent } from "../components/CardContent";
import { Loader } from "../components/Loader";

export default function Search() {
  const { title } = useParams();
  if (!title) {
    return;
  }

  const { content, loading } = useSearch(title);

  return (
    <section className="page-search">
      {loading && (
        <section className="section-loader">
          <Loader />
        </section>
      )}

      {content.length > 0 && (
        <>
          <h1 className="title-search">Results for: {title}</h1>
          <ul className="container-content-search">
            {content.map((item) => (
              <CardContent key={item.id} content={item} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
