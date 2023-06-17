import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Detail (){
    const {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
              console.log(data);
           } 
        })
        .catch(error => window.alert('¡No hay personajes con este ID!'));
        return setCharacter({});
     }, [id]);

    return (
        <div>
            {character.name && (
                <>
                    <h1>{character.name}</h1>
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                    <p>{character.gender}</p>
                    <p>{character.origin?.name}</p>
                    <img src={character.image} alt="img"/>
                </>
            )}
        </div>
    )
}