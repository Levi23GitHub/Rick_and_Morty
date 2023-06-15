import style from "./Card.module.css"

export default function Card({onClose, image, name, status, species, gender, origin, id}) {
   
   return (
      <div className = {style.card_div}>
         <button className={style.btn1} onClick={() => onClose(id)}>X</button>
         
         <div className={style.individual_card}>
            <div className = {style.front}>
               <img src={image} alt='' />
               <h2 className= {style.name}>{name}</h2>
            </div>
         
            <div className={style.back}>
               <h2 >{status}</h2>
               <h2 >{species}</h2>
               <h2 >{gender}</h2>
               <h2 >{origin}</h2>
            </div>
         </div>
      </div>
   );
}
