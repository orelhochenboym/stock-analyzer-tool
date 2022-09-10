import 'assets/global.scss';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'routes/Home/Home';

export default function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='*' element={<Navigate to={'/'} />} />
			</Routes>
		</div>
	);
}
