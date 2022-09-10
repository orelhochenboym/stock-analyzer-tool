import React, { useEffect, useState } from 'react';
import './StockResults.scss';

type Props = {
	stockTicker: string;
	onStockChange: Function;
};

export default function StockResults(props: Props) {
	let results: { ticker?: string }[] = [];
	const [data, setData] = useState({
		stockTicker: props.stockTicker,
		results: results,
	});

	useEffect(() => {
		if (props.stockTicker !== '') {
			const timeoutId = setTimeout(async () => {
				const response = await fetch(`https://api.polygon.io/v3/reference/tickers?ticker.gte=${props.stockTicker}&type=CS&market=stocks&active=true&sort=ticker&order=asc&limit=10`, { headers: { Authorization: 'Bearer tULgjkWUPeckwDCamEARFl68v2MAzsOf' } });
				const results = await response.json();
				setData({ stockTicker: props.stockTicker, results: results.results });
			}, 1000);
			return () => clearTimeout(timeoutId);
		}
	}, [props.stockTicker]);

	return (
		<ul>
			{data.results.map((result, i) => (
				<li key={i}>{result.ticker}</li>
			))}
		</ul>
	);
}
