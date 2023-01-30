import { useState } from 'react';
import './App.css';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import {movieData} from "./Components/Data"

function App() {
  const [movies, setMovies] = useState(movieData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  return (
    <div className="App">
      <Filter setFilterTitle = {setFilterTitle} filterRating={filterRating} setFilterRating={setFilterRating} />
      <MovieList movies={movies} setMovies={setMovies} filterTitle={filterTitle} filterRating={filterRating}/>
    </div>
  );
}

export default App;