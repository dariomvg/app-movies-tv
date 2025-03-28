import "../styles/header.css";
import { Link } from "react-router-dom";
import { FormSearch } from "./FormSearch";
import { useState } from "react";
import iconMenu from "../assets/icon-menu.svg";
import iconHome from "../assets/home.svg";
import iconMovies from "../assets/movies.svg";
import iconSeries from "../assets/series.svg";
import iconUpcoming from "../assets/upcoming.svg";
import iconGenres from "../assets/genres.svg";
import iconMyList from "../assets/my-list.svg";

export const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <header className={`header ${active ? "active" : ""}`}>
      <img
        src={iconMenu}
        alt="icon menu"
        width={40}
        height={40}
        className="icon-menu"
        onClick={() => setActive(!active)}
          loading="lazy"
      />

      <div className="container-menu">
        <FormSearch active={active} />

        <nav className="nav-menu">
          <div className="container-link">
            <img
              src={iconHome}
              alt="icon home"
              width={25}
              height={25}
              className="icon-nav-menu"
          loading="lazy"
            />
            <Link to="/" className="link-menu">
              Home
            </Link>
          </div>
          <div className="container-link">
            <img
              src={iconMovies}
              alt="icon movies"
              width={25}
              height={25}
              className="icon-nav-menu"
          loading="lazy"
            />
            <Link to="/movies/1" className="link-menu">
              Movies
            </Link>
          </div>

          <div className="container-link">
            {" "}
            <img
              src={iconSeries}
              alt="icon series"
              width={25}
              height={25}
              className="icon-nav-menu"
          loading="lazy"
            />
            <Link to="/series/1" className="link-menu">
              Series
            </Link>
          </div>

          <div className="container-link">
            <img
              src={iconUpcoming}
              alt="icon upcoming"
              width={25}
              height={25}
              className="icon-nav-menu"
          loading="lazy"
            />
            <Link to="/upcomings" className="link-menu">
              Upcomings
            </Link>
          </div>

          <div className="container-link">
            <img
              src={iconGenres}
              alt="icon genders"
              width={25}
              height={25}
              className="icon-nav-menu"
          loading="lazy"
            />
            <Link to="/genres" className="link-menu">
              Genres
            </Link>
          </div>

          <div className="container-link">
            <img
              src={iconMyList}
              alt="icon list"
              width={25}
              height={25}
              className="icon-nav-menu"
          loading="lazy"
            />
            <Link to="/my-list" className="link-menu">
              My list
            </Link>
          </div>
        </nav>
      </div>
      <footer className="footer-menu">
        <p className="title-footer">© AppMovies 2025</p>
      </footer>
    </header>
  );
};
