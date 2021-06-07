import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap'

export const Nav = ({handleSearchValue, searchMovie, getMovies, value}) => {
    return (
    <Navbar bg="dark" variant="dark" expand="lg" >
        <LinkContainer to='/'><Navbar.Brand onClick={getMovies} >TMDB DiamSol</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Form inline onSubmit={searchMovie} >
            <FormControl onInput={handleSearchValue} type="text" value={value} placeholder="Search" className="mr-sm-2" />
            <Button onClick={searchMovie} variant="outline-info">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
    )
}
