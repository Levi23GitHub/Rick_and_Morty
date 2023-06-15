import SearchBar from "../SearchBar/SearchBar"

function Nav ({onSearch}){
    return (
        <nav>
            <SearchBar onSearch={onSearch} />
        </nav>

    )
}


export default Nav;