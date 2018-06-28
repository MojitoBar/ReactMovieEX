import React from 'react';
import './Movie.css';

function Movie({title, poster, genres, synopsis, rating}){
	return (
		<div className="Movie">
			<div className="Movie__Columns">
				<MoviePoster poster={poster} alt={title}/>
			</div>
			<div className="Movie__Columns">
				<h1>{title}</h1>
				<p className="Movie__rating">
					{rating}
				</p>
				
				<div className="Movie__Genres">
					{genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
				</div>
				<p className="Movie__Synopsis">
					{synopsis}
				</p>
			</div>
		</div>
	)
}

function MoviePoster({poster, alt}){
	return (
		<img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
	)
}

function MovieGenre({genre}){
	return(
		<span className="MOvie__Genre">{genre}  </span>
	)
}

export default Movie