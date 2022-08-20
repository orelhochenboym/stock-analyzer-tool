import React from 'react';
import './ParameterData.scss';

type Props = {
	stockTicker: string;
};

export default function ParameterData(props: Props) {
	return (
		<div id='data-container'>
			<div id='one-year-data'>1.0%</div>
			<div id='five-year-data'>5.0%</div>
			<div id='ten-year-data'>10.0%</div>
		</div>
	);
}
