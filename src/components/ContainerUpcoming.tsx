import { Link } from "react-router-dom";
import { Content } from "../types/types";
import { full_image } from "../utils/options";
import iconLink from "../assets/link.svg";
import { convertDate } from "../utils/convertDate";
import "../styles/main.css";

export const ContainerUpcoming = ({ content }: { content: Content }) => {
  const { backdrop_path, title, id, release_date, overview } = content;

  return (
    <>
      <h2 className="title-container-upcoming">Last upcoming movie</h2>
      <section className="section-upcoming">
        <img
          src={`${full_image}${backdrop_path}`}
          alt={title}
          width="100%"
          height="100%"
          className="image-upcoming"
          loading="lazy"
        />
        <div className="container-upcoming">
          <div className="box-title-link">
            <Link
              to={`/content/${id}/movie/${title}`}
              className="title-container-upcoming">
              {title}
            </Link>
            <img
              src={iconLink}
              alt="icon link"
              width={25}
              height={25}
              className="icon-link"
              loading="lazy"
            />
          </div>

          <p className="date-container-main">
            Lanzamiento: {convertDate(release_date)}
          </p>
          <p className="overview-container-main">{overview}</p>
        </div>
      </section>
    </>
  );
};
