import 'assets/global.scss';
import StockAnalyzerTool from 'components/StockAnalyzerTool/StockAnalyzerTool';
import React from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import Home from 'routes/Home/Home';

export default function App() {
	let params = useParams();
	return (
		<div className='App'>
			<Routes>
				<Route path='calculate' element={<Home stockTicker={params.stockTicker!} />}>
					<Route path=':stockTicker' element={<StockAnalyzerTool />}></Route>
				</Route>
				<Route path='*' element={<Navigate to={'calculate'} />} />
			</Routes>
		</div>
	);
}
