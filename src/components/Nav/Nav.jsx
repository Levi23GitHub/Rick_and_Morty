import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
// import About from "../Vista/About";

 export default function Nav ({onSearch}){

    return (
        <nav>
            <NavLink to="/home"><button>Home</button></NavLink>
            <NavLink to="/about"><button>About</button></NavLink>
            
            <SearchBar onSearch={onSearch} />
        </nav>

    )
}
