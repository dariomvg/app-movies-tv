import { useParams } from "react-router-dom";
import { CardContent } from "../components/CardContent";
import { useContent } from "../hooks/useContent";
import iconNext from "../assets/icon-next.svg";
import iconBack from "../assets/icon-back.svg";
import "../styles/page-content.css";
import { Loader } from "../components/Loader";

export default function Movies() {
  const { id } = useParams();
  if (!id) return;

  const { content, nextPage, backPage, loading } = useContent(
    parseInt(id),
    "movies"
  );

  return (
    <section className="page-both-content">
      {loading ? (
        <section className="section-loader">
          <Loader />
        </section>
      ) : (
        content !== null && (
          <>
            <h1 className="title-both-content">List movies</h1>
            <ul className="container-both-content">
              {content?.map((item) => (
                <CardContent key={item.id} content={item} />
              ))}
            </ul>
            <div className="container-button-content">
              {parseInt(id) > 1 && (
                <button className="button-both-content" onClick={backPage}>
                  <img
                    src={iconBack}
                    alt="icon back"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  {parseInt(id) - 1}
                </button>
              )}
              <p className="title-page">{id}</p>
              <button className="button-both-content" onClick={nextPage}>
                {parseInt(id) + 1}
                <img
                  src={iconNext}
                  alt="icon back"
                  width={20}
                  height={20}
                  loading="lazy"
                />
              </button>
            </div>
          </>
        )
      )}
    </section>
  );
}
