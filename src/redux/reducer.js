import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./actions";

const inicialState = {
myFavorites: [],
allCharacters: []
}

export const rootReducer = (state = inicialState, action)=>{
    switch (action.type){
        case ADD_FAV:
            // const copyAllCharacter = state.allCharacters;
            return{...state, 
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]};
        case REMOVE_FAV:
                let copy = state.myFavorites.filter((character) =>{
                    return parseInt(character.id) !== parseInt(action.payload);
                })
                return{
                    ...state,
                    myFavorites:copy,
                            // allCharacters:copy
                    }
        case FILTER:
            let copy2 = [...state.allCharacters];
            let filterGender = copy2.filter((character)=>{
                return character.gender === action.payload
            })
            return {
                ...state,
                myFavorites:filterGender
            };
                
        case ORDER:
            let copy3 = [...state.allCharacters];
            return{
                ...state,
                myFavorites: copy3.sort((a,b) =>{
                    return action.payload === "A" ? a.id - b.id : b.id - a.id
                })
            }
            
        default:
            return{...state};

        };
};