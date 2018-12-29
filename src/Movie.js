import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
// class Movie extends Component{

//     static propTypes = {
//         title: PropTypes.string,
//         poster:PropTypes.string
//     }

//     render(){
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1>
//             </div>
//         );
//     }

// }

function Movie({title,poster,genres,synopsis}){
            return (
                <div className="movie">
                    <div className="Movie__Columns">
                    <MoviePoster poster={poster} alt={title}/>
                    </div>
                    <div className="Movie__Columns">
                    <h1>{title}</h1>
                    <div className="Movie__Genres">
                        {genres.map((genre,index) => <MovieGenre genre={genre} key={index} />)}
                    </div>
                    <p className="Movie__Synopsis">
                        {synopsis}
                    </p>
                    </div>
                </div>
            );            
}

Movie.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
}

function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster" className="Movie_Poster"/>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre} </span>
    )
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt :PropTypes.string.isRequired
}
MovieGenre.propTypes = {
    genre : PropTypes.string
}

export default Movie;