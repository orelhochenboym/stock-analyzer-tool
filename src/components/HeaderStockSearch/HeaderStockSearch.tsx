import React, { useState } from 'react';
import correctStockTickerInput from 'utils/correctStockTickerInput';
import './HeaderStockSearch.scss';

type Props = {
	stockTicker: string;
};

export default function HeaderStockSearch(props: Props) {
	const [stockTicker, setStockTicker] = useState(props.stockTicker);

	const onStockTickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.target.value = correctStockTickerInput(e);
		setStockTicker(e.target.value);
	};
	return (
		<div id='stock-search-header-container'>
			<input type='text' onChange={onStockTickerChange} placeholder='Enter Stock Ticker Here...' name='stock-ticker-input' id='stock-ticker-input' value={stockTicker} required />
		</div>
	);
}
