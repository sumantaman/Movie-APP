import React, { useEffect, useState } from 'react'
import _ from 'lodash'

import './MovieList.css'
import MovieCard from './MovieCard'
import { FilterGroup } from './FilterGroup'


const MovieList = ( {type,title, emoji} ) => {
    const [movies, setMovies] = useState([]);
    const [filterMovies, setFilterMovies] = useState([]);
    const [minRating, setMinRating] = useState(0)
    const [sort, setSort] = useState({
        by : 'default',
        order : 'asc'
    })

    useEffect(()=>{
        fetchMovies();
    },[])

    useEffect(()=>{
        if(sort.by !== "default"){
        const sortedMovies  =  _.orderBy(filterMovies,[sort.by],[sort.order])
        setFilterMovies(sortedMovies)
        }
    }, [sort])


    const fetchMovies = async() =>{
         const response =   await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=6bc43dc288da0f2c066f2e128772de42`);
            const data = await response.json()
            setMovies(data.results)
            setFilterMovies(data.results)
            // console.log(data.results);
    };

    const handleFilter = rate =>{
        setMinRating(rate)
        const filteredMovies = movies.filter(movie => movie.vote_average >= rate)
        // setMovies(filteredMovies)
        setFilterMovies(filteredMovies)
    }

    const handleSort = (e) =>{
        const {name, value} = e.target;
        setSort((prev) =>({...prev, [name]: value}))
    }
    console.log(sort);
    
            
  return (
    <section className='movie_List' id={type}>
        <header className=' align_center movie_list_header'>
            <h2 className="align_center movie_list_heading">
                {title}
                 <img src={emoji} alt=" fire emoji" className='navbar_emoji' />
            </h2>
            <div className="align_center movie_list_fs">
                < FilterGroup  minRating={minRating} onRatingClick={handleFilter} rating ={[8,7,6]}/>
                <select name="by" id="" className="movie_sorting" onChange={handleSort}  value={sort.by}>
                    <option value="default">Sort By</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>

                <select name="order" id="" className="movie_sorting" onChange={handleSort}  value={sort.order}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Decending</option>
                </select>
            </div>
        </header>
        <div className="movie_cards">
            {
                filterMovies.map(movie => <MovieCard  key={movie.id} movie ={movie}/>)
            }
        </div>
    </section>
  )
}

export default MovieList
