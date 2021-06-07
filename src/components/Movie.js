import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Card, Button, Col} from 'react-bootstrap'

export const Movie = ({image, title, overview, id, handleMovieInfo, apiKey}) => {
    
    return (
        <Col xs={12} sm={6} md={4} style={{marginTop: 30}}>
            <LinkContainer to='/info'>
        <Card>
            <Card.Img variant="top" src={image} onClick={() => handleMovieInfo(id) } />
            <Card.Body>
                <Card.Title>{`${title}`}</Card.Title>
                <Card.Text>
                {overview ? overview.slice(0, 100)+'...' : null}
                </Card.Text>
                <Button variant="dark" onClick={() => handleMovieInfo(id)}>More info</Button>
            </Card.Body>
        </Card>
        </LinkContainer>
        </Col>
    )
}
