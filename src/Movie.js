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

function Movie({title,poster}){
            return (
                <div>
                    <MoviePoster poster={poster}/>
                    <h1>{title}</h1>
                </div>
            );            
}

Movie.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

// class MoviePoster extends Component{

//     static propTypes = {
//         poster : PropTypes.string.isRequired
//     }

//     render(){
//         return(
//             <img src={this.props.poster} alt="Movie Poster" />
//         )
//     }
// }

function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster" />
    )
}

MoviePoster.propTypes = {
    poster : PropTypes.string
}

export default Movie;