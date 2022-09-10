import React, { ChangeEvent } from 'react';
import './StockSearchInput.scss';

type Props = {
	stockTicker: string;
	onStockChange: Function;
};

export default function StockSearchInput(props: Props) {
	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		props.onStockChange(e.target.value);
	}

	return (
		<>
			<input type='text' id='stock-search-input' placeholder='Enter a stock ticker here...' value={props.stockTicker} onChange={handleChange} />
		</>
	);
}
