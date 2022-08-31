import React, { useState } from 'react';
import { URLSearchParams } from 'url';
import correctStockTickerInput from 'utils/correctStockTickerInput';
import './HeaderStockSearch.scss';

export default function HeaderStockSearch() {
	const [stockTicker, setStockTicker] = useState('');

	const onStockTickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.target.value = correctStockTickerInput(e);
		setStockTicker(e.target.value);
	};
	return (
		<div id='stock-search-header-container'>
			<input type='text' onChange={onStockTickerChange} placeholder='Enter Stock Ticker Here...' name='stock-ticker-input' id='stock-ticker-input' required />
		</div>
	);
}
