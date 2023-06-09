import { connect, useDispatch, useSelector } from "react-redux"
import { Card } from "../Card/Card"
import style from "./Favorites.module.css"
import { useState } from "react"
import { orderCards,filterCards } from "../../redux/actions"


export const Favorites = () =>{
    const[aux, setAux] = useState(false);
    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites);

    const handleOrder = (e) =>{
        dispatch(orderCards(e.target.value));
        setAux(!aux);
    }

    const handleFilter = (e) =>{
        dispatch(filterCards(e.target.value))
    }

    return(
        <div>
            <div>
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className = {style.cards_div}>
            {myFavorites.map((favorite) => (
                <Card
                    key = {favorite.id}
                    id = {favorite.id}
                    name = {favorite.name}
                    status = {favorite.status}
                    species = {favorite.species}
                    gender = {favorite.gender}
                    origin = {favorite.origin?.name}
                    image = {favorite.image}
                />
            ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)

