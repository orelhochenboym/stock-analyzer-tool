import ParameterData from 'components/ParameterData/ParameterData';
import ParameterInput from 'components/ParameterInput/ParameterInput';
import ParameterLabel from 'components/ParameterLabel/ParameterLabel';
import React from 'react';
import './RowParameter.scss';

type Props = {
	paramName: string;
	stockTicker: string;
};

const vocabulary: object = {
	'Revenue Growth %': 'rg',
	'Profit Margin %': 'pm',
	'Free Cash Flow Margin %': 'fcfm',
	'P/E (Price / Earnings)': 'pe',
	'P/FCF (Price / Free Cash Flow)': 'pfcf',
	'Desired Annual Returns %': 'dar',
};

export default function RowParameter(props: Props) {
	return (
		<div id='param-row-container'>
			<ParameterLabel paramString={props.paramName} />
			<ParameterData stockTicker={props.stockTicker} />
			<ParameterInput paramType={vocabulary[props.paramName as keyof typeof vocabulary]} />
		</div>
	);
}
