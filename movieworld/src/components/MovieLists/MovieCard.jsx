import React from 'react'
import Star from '../../assets/star.png'
import './MovieCard.css'

import { Link } from 'react-router-dom'
const MovieCard = ({movie}) => {
  return (
  <Link to={`/movie/${movie.id}`}  className='movie_card'>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='movie_poster' alt="poster" />
    <div className="movie_details">
        <h3 className="movie_details_heading">{ movie.original_title }</h3>
        <div className='align_center movie_date_rate'>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}<img src={Star} alt="rating" className='card_emoji' /></p>
        </div>
        <p className="movie_decription">
        
        {movie.overview.slice(0,50)+ "..."}

        </p>
    </div>
  </Link>
  )
}

export default MovieCard
