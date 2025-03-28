import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Upcoming from "./pages/Upcoming";
import Series from "./pages/Series";
import Genres from "./pages/Genres";
import Search from "./pages/Search";
import Actor from "./pages/Actor";
import NotFound from "./pages/NotFound";
import { Header } from "./components/Header";
import Main from "./pages/Main";
import Genre from "./pages/Genre";
import Content from "./pages/Content";
import { MyList } from "./pages/MyList";
import "./app.css";

export default function App() {
  return (
    <main className="section-main">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies/:id" element={<Movies />} />
          <Route path="/series/:id" element={<Series />} />
          <Route path="/upcomings" element={<Upcoming />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genre/:id/:title" element={<Genre />} />
          <Route path="/content/:id/:media/:title" element={<Content />} />
          <Route path="/actor/:id/:title" element={<Actor />} />
          <Route path="/search/:title" element={<Search />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}
