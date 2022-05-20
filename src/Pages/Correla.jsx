import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Homes from './Home';
import Trend from './Trend';
import Contact from './Contact';
import NoPage from './NoPage';
import NavbarHome from '../components/Navbar/navbar';

const HomePage = () => {
	return (
		<BrowserRouter>
			<NavbarHome />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="Login" element={<Homes />} />
					<Route path="Trend" element={<Trend />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default HomePage;
