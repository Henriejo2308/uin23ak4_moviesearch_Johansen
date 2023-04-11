import {useState, useEffect } from 'react';
import './style.css'
import Movies from "./components/searchresults";
import LandingPage from "./pages/LandingPage";
import {Route, Routes } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState ([])
  const [search, setSearchResult] = useState('James Bond')

  const listMovies = async() => {
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=fc24d6fc`) //https://lms.webtricks.blog/kurs/uin/asynkron-databehandling-i-react/recipe-api-oppsett
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() =>{ //https://lms.webtricks.blog/kurs/uin/react-states/useeffect
    listMovies()
  },[])



  return ( //https://lms.webtricks.blog/kurs/uin/react-navigasjon-og-layout/react-router
    <Routes> 
      <Route element={<LandingPage/>}>
        <Route index element={<Movies movies={movies} setSearchResult={setSearchResult} listMovies={listMovies} />} />
      </Route>
    </Routes>
    
    );
  }
  

export default App;