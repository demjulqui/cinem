import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import { Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import RecipeReviewCard from '../Models/Car';

const NavbarHome = () => {
	const [ cartItems, setCartItems ] = useState(0);
	const [ favItems, setFavItems ] = useState(0);
	const [ cart, setCart ] = useState([]);
	const [ fav, setFav ] = useState([]);

	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem('cart'));
		const fav = JSON.parse(localStorage.getItem('fav'));
		if (cart) {
			setCart(cart);
			setCartItems(cart.length);
		}
		if (fav) {
			setFav(fav);
			setFavItems(fav.length);
		}
	}, []);

	const addToCart = (id) => {
		const cart = JSON.parse(localStorage.getItem('cart'));
		if (cart) {
			if (cart.includes(id)) {
				cart.splice(cart.indexOf(id), 1);
			} else {
				cart.push(id);
			}
		} else {
			cart.push(id);
		}
		localStorage.setItem('cart', JSON.stringify(cart));
		setCart(cart);
		setCartItems(cart.length);
	};

	const addToFav = (id) => {
		const fav = JSON.parse(localStorage.getItem('fav'));
		if (fav) {
			if (fav.includes(id)) {
				fav.splice(fav.indexOf(id), 1);
			} else {
				fav.push(id);
			}
		} else {
			fav.push(id);
		}
		localStorage.setItem('fav', JSON.stringify(fav));
		setFav(fav);
		setFavItems(fav.length);
	};

	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/Trend">Trend</Nav.Link>
							<NavDropdown title="Link" id="navbarScrollingDropdown">
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#" disabled>
								Link
							</Nav.Link>
						</Nav>
						<IconButton onClick={() => addToCart(1)}>
							<ShoppingCartIcon />
							<span className="badge badge-pill badge-danger">{cartItems}</span>
						</IconButton>
						<Form className="d-flex">
							<FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarHome;
