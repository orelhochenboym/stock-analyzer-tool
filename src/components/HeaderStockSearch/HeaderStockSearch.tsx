import React, { useState } from 'react';
import yahooFinance from 'yahoo-finance2';
import './HeaderStockSearch.scss';

export default function HeaderStockSearch() {
	const [stockTicker, setStockTicker] = useState('');

	const checkValidity = (inputValue: string) => {
		return inputValue.replace(/[^A-Za-z]/g, '');
	};

	const onStockTickerChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		e.target.value = checkValidity(e.target.value);
		setStockTicker(e.target.value);
		yahooFinance
			.quote(stockTicker)
			.then((res) => {
				console.log(res.underlyingSymbol);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div id='stock-search-header-container'>
			<input type='text' onChange={onStockTickerChange} placeholder='Enter Stock Ticker Here...' name='stock-ticker-input' id='stock-ticker-input' />
		</div>
	);
}
