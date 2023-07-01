import axios from 'axios';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail'; 
import About from "./components/About/About";
// import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';



function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   const navigate = useNavigate();

   const Email = "lima@gmail.com";
   const Password = "miPass123";

   const login = (userData) =>{
      if(userData.email === Email && userData.password === Password){
         setAccess(true);
         navigate("/home");
      }
      else alert("Invalid credencial");
   };

   useEffect(() =>{
      !access && navigate("/");
   },[access]);

   
   function onSearch(id, Error) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
         else{
            return Error;
         }
      })
      // .catch(error => window.alert(error.response.data.error)) ;
   }

   function onClose (id) {
      const newCharacters = characters.filter(character => character.id !== Number(id));

      setCharacters(newCharacters);
   }

   return (
      <>
         <Nav onSearch = {onSearch} />
         <Routes>
            <Route 
               path='/home' 
               element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route 
               path='/about' 
               element={<About />}
            />
            <Route 
               path='/favorites' 
               element={<Favorites />}
            />
            <Route 
               path='/detail/:id' 
               element={<Detail />}
            />
            <Route
               path='/'
               element={<Form login={login}/>}
            />
         </Routes>
      </>
   );
}

export default App;
