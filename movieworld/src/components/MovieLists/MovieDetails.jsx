import React from 'react'

import { useParams } from 'react-router-dom'
function MovieDetails() {

    const {movieId} = useParams()

  return (
    <div>
      <h1>hello world {movieId}</h1>
    </div>
  )
}

export default MovieDetails
