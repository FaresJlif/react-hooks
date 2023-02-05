import { useState } from 'react';
import './App.css';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import {movieData} from "./Components/Data"
import { Route, Routes } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState(movieData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  return (
    <div className="App">
      <Filter setFilterTitle = {setFilterTitle} filterRating={filterRating} setFilterRating={setFilterRating} />
      <Routes>
      <Route path="/" element={<MovieList movies={movies} setMovies={setMovies} filterTitle={filterTitle} filterRating={filterRating}/>}  />
      <Route path="/trailer" element={<MovieTrailer movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
        
      