import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useEffect, useState } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";


export function Card({onClose, image, name, status, species, gender, origin, id, addFav, removeFav, myFavorites}) {
      const [isFav, setIsFav] = useState(false)

      useEffect(() => {
         myFavorites?.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }, [myFavorites]);


      const handleFavorite = ()=>{
         if(isFav){
            setIsFav(false);
            removeFav(id);
         }else{
            setIsFav(true);
               addFav({id, name, status, species, gender, origin, image})
            
         }
      }

   return (
      <div className = {style.card_div}>
         
            <div className = {style.img_div}>
               {
                  isFav ? (
                     <button className={style.fav_btn} onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button className={style.fav_btn} onClick={handleFavorite}>🤍</button>
                  )
               }
               <button className={style.btn1} onClick={() => onClose(id)}>X</button>
               <img src={image} alt='' />
               <Link to={`/detail/${id}`}>
                  <h2 className={style.name}>{name}</h2>
               </Link>
            </div>
         
            <div className={style.info}>
               {/* <h2 >{status}</h2> */}
               <h2 >{species}</h2>
               <h2 >{gender}</h2>  
               {/* <h2 >{origin}</h2> */}
            </div>
         
      </div>
   );
}

export const mapDispatchToProps = (dispatch)=>{
   return{
      addFav: (character)=> {
         dispatch(addFav(character));
      },
      removeFav: (id)=>{
         dispatch(removeFav(id))
      }
   }
}

export const mapStateToProps =(state)=>{
   return {
      myFavorites: state.myFavorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);