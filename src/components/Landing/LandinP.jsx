import React, { useState, useEffect } from 'react';

import Services from './Services';
import Navbar from './Navbar';
import HomeLanding from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from '../../Pages/NoPage';
import Home from '../../Pages/Home';

const Landin = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/Landing" element={<HomeLanding />} />
					<Route path="services" element={<Services />} />
					<Route path="*" element={<NoPage />} />
					<Route path="/Home" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Landin;
