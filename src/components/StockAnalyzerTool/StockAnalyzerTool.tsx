import RowHeader from 'components/RowHeader/RowHeader';
import RowParameter from 'components/RowParameter/RowParameter';
import React from 'react';
import './StockAnalyzerTool.scss';

export default function StockAnalyzerTable() {
	return (
		<form action='' method='get'>
			<div id='stock-analyzer-tool-container'>
				<RowHeader />
				<RowParameter stockTicker='' paramName='Revenue Growth %' />
				<RowParameter stockTicker='' paramName='Profit Margin %' />
				<RowParameter stockTicker='' paramName='Free Cash Flow Margin %' />
				<RowParameter stockTicker='' paramName='P/E (Price / Earnings)' />
				<RowParameter stockTicker='' paramName='P/FCF (Price / Free Cash Flow)' />
				<RowParameter stockTicker='' paramName='Desired Annual Returns %' />
				{/* <button type='submit'>Submit</button> */}
			</div>
		</form>
	);
}
