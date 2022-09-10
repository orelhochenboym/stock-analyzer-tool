import RowHeader from 'components/RowHeader/RowHeader';
import RowParameter from 'components/RowParameter/RowParameter';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './StockAnalyzerTool.scss';

export default function StockAnalyzerTable() {
	let params = useParams();
	const [stockData, setStockData] = useState({ stockTicker: '', rg: '', npm: '', fcfm: '', sb: '' });

	const getStockData = async () => {
		const res = await fetch('http://192.168.1.187:8080/api/AAPL').then((response) => response.json());
		setStockData(res);
	};

	useEffect(() => {
		getStockData();
	}, []);

	return (
		<form action='' method='get'>
			<div id='stock-analyzer-tool-container'>
				<RowHeader stockTicker={params.stockTicker!} />
				<RowParameter stockData={stockData.rg} stockTicker={params.stockTicker!} paramName='Revenue Growth %' />
				<RowParameter stockData={stockData.npm} stockTicker={params.stockTicker!} paramName='Net Profit Margin %' />
				<RowParameter stockData={stockData.fcfm} stockTicker={params.stockTicker!} paramName='Free Cash Flow Margin %' />
				<RowParameter stockData={stockData.sb} stockTicker={params.stockTicker!} paramName='Share Buybacks %' />
				<RowParameter stockData={'N/A'} stockTicker={params.stockTicker!} paramName='P/E (Price / Earnings)' />
				<RowParameter stockData={'N/A'} stockTicker={params.stockTicker!} paramName='P/FCF (Price / Free Cash Flow)' />
				<RowParameter stockData={'N/A'} stockTicker={params.stockTicker!} paramName='Desired Annual Returns %' />
				<div id='calculate-btn-container'>
					<button id='calculate-btn' type='submit'>
						Calculate
					</button>
				</div>
			</div>
		</form>
	);
}
