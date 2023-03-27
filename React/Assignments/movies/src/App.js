import React,{useState} from 'react';
import './App.css';
import Movie from './components/Movie';
import Search from './components/Search';



function App() {
  const [movie_name, setMovieName] = useState('')
  const getSearchField= (data) =>{
    setMovieName(data)
  }

  return (
    <>
      <Search search={getSearchField}/>
      {
        movie_name && <Movie mname={movie_name}/>
      }
    </>
  );
}

export default App;
