import { Link } from "react-router-dom";
import style from "./Card.module.css";


export default function Card({onClose, image, name, status, species, gender, origin, id}) {
   
   return (
      <div className = {style.card_div}>
         
            <div className = {style.front}>
               <button className={style.btn1} onClick={() => onClose(id)}>X</button>
               <img src={image} alt='' />
               <Link to={`/detail/${id}`}>
                  <h2 className={style.name}>{name}</h2>
               </Link>
            </div>
         
            <div className={style.back}>
               <h2 >{status}</h2>
               <h2 >{species}</h2>
               <h2 >{gender}</h2>
               <h2 >{origin}</h2>
            </div>
         
      </div>
   );
}
