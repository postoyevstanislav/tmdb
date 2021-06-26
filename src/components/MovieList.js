import React from 'react';
import {Container, Row} from 'react-bootstrap';
import {Movie} from './Movie';


export const MovieList = ({movies}) => {
    return (
        <Container>
            <Row>
            {
                movies.map(movie => {
                    return (
                        <Movie key={movie.id} id={movie.id}
                        image={movie.poster_path === null ? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' 
                        : 
                        `http://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        title={movie.title} overview={movie.overview}/>
                    )
                })
            }
            </Row>
        </Container>   
        
    )
}
