import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Trend from './Trend';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

const HomePage = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="Trend" element={<Trend />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default HomePage;
