import axios from 'axios';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState } from 'react';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {
   const [characters,setCharacters] = useState([]);

   // const onSearch = (newChar) => {
   //    setCharacters([...characters, newChar])
   // }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      }).catch(error => window.alert('¡No hay personajes con este ID!'));
   }

   function onClose (id) {
      const newCharacter = characters.filter(character => character.id !== Number(id));

      setCharacters(newCharacter);
   }

   return (
      <>
         <Nav onSearch = {onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </>
   );
}

export default App;
