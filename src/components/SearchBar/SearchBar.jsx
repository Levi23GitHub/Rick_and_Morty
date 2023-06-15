import { useState } from "react";
import style from "./SearchBar.module.css";


export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");
   
   function handleChange (event){
      setId(event.target.value);
   }


   return (
      <div className= {style.div_box}>
         <input 
            className={style.search_input} 
            placeholder="ID" 
            type='search' 
            value={id}
            onChange={handleChange}/>
         <button className= {style.search_btn} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
