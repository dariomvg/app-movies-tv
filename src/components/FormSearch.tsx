import { FormEvent, useState } from "react";
import iconSearch from "../assets/icon-search.svg";
import "../styles/form-search.css"
import { useNavigate } from "react-router-dom";

export const FormSearch = ({active}: {active: boolean}) => {
    const navigate = useNavigate(); 
    const [titleSearch, setTitleSearch] = useState<string>("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        navigate(`/search/${titleSearch}`);
        setTitleSearch("");
    }

    return (
        <form className={`form ${active ? "active-form" : ""}`} onSubmit={handleSubmit}>
            <input type="text" className="input-search" placeholder="Search movies, series..." value={titleSearch} onChange={(e) => setTitleSearch(e.target.value)} />
            <button className="button-search">
                <img src={iconSearch} alt="icon search" width={25} height={25} className="icon-search" 
          loading="lazy" />
            </button>
        </form>
    )
}