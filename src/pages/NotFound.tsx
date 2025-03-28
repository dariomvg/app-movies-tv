import { Link } from "react-router-dom";
import image404 from "../assets/img-404.svg";
import "../styles/not-found.css"; 
export default function NotFound () {

    return (
        <section className="page-not-found">
            <img src={image404} alt="image error 404" className="img-not-found" width={400} height={400} 
          loading="lazy" />
            <p> <b>Error 404</b> | <b>Page Not Found</b> | <Link to="/" className="link-not-found">Come back</Link></p>
        </section>
    )
}

