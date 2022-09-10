import React from 'react';
import './ParameterData.scss';

type Props = {
	stockTicker: string;
	paramType: string;
	stockData: any;
};

export default function ParameterData(props: Props) {
	return props.paramType === 'dar' || props.paramType === 'pe' || props.paramType === 'pfcf' ? (
		<div id='data-container'></div>
	) : (
		<div id='data-container'>
			<div id='one-year-data'>{props.stockData.oneYear + '%'}</div>
			<div id='five-year-data'>{props.stockData.fiveYear + '%'}</div>
			<div id='ten-year-data'>{props.stockData.tenYear + '%'}</div>
		</div>
	);
}
