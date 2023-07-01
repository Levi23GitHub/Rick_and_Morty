import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css"

 export default function Nav ({onSearch}){

    return (
        <nav className={style.nav}>
            <div className={style.btns}>
            <NavLink to="/home" ><button className={style.home}>Home</button></NavLink>
            <NavLink to="/about" ><button className={style.about}>About</button></NavLink>
            <NavLink to="/favorites"><button>Favorites</button></NavLink>
            {/* <NavLink to="/form" ><button className={style.form}>Login</button></NavLink> */}
            </div>

            <div>
            <SearchBar className onSearch={onSearch} />
            </div>
        </nav>

    )
}
