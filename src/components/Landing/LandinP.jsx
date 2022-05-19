import React, { useState, useEffect } from 'react';

import Services from './Services';
import Navbar from './Navbar';
import HomeLanding from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Landin = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/Landing" element={<HomeLanding />} />
					<Route path="services" element={<Services />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Landin;
