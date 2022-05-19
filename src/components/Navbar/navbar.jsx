import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import { Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Layout from '../../Pages/Layout';
import Home from '../../Pages/Home';
import Trend from '../../Pages/Trend';
import Contact from '../../Pages/Contact';
import CercaBox from './Cerca';
import { styled } from '@mui/styles';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

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

	const MyButton = styled(Button)({
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px'
	});

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
					<Navbar.Brand href="/">Pagina Principale</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Col>
							<Nav
								className="me-auto my-2 my-lg-0"
								style={{ maxHeight: '100px' }}
								activeKey="/home"
								element={<Layout />}
							>
								<Nav.Link href="/" index element={<Home />}>
									Home
								</Nav.Link>
								<Nav.Link href="/Trend" element={<Trend />}>
									Preferiti
								</Nav.Link>

								<Nav.Link href="/Contact" element={<Contact />}>
									Contact
								</Nav.Link>
							</Nav>
						</Col>
						<Col>
							<CercaBox />
						</Col>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarHome;
