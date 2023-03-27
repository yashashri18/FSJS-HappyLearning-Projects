import React, {useState, useEffect} from 'react'
import './Movie.css'

function Movie(props) {
  console.log("movie name is",props.mname)
  const [movie_details, setMovieDeatils] = useState([]);
  
  const fetchData = (val) =>{
    fetch(`https://www.omdbapi.com/?apikey=89efb3b0&t=${val}`)
    .then(response => { return response.json()})
    .then(data=> setMovieDeatils(data))
  }
  
  useEffect(() => {    
    fetchData(props.mname);
  }, [props.mname])
 

  console.log('movie details ',movie_details)
    
 
      return (
        <>
          { movie_details.Title && 
          
          <div className="movie">
          <h1>Showing Result for : {movie_details.Title}</h1>          
          <div>
            <img
              width="200"
              alt={movie_details.Title}
              src={movie_details.Poster}
            />
          </div>
          <p>Movie Release in : {movie_details.Year}</p>
          <p>IMDB Ratings: {movie_details.imdbRating}</p>
          <p>Languages: {movie_details.Language}</p>
        </div>
        }
        { movie_details.Response && 
        <div className="notfound"><p>{movie_details.Error}, Enter another title !</p></div>}
        </>
      )  
  
    
}

export default Movie
