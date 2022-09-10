import HeaderHistorical from 'components/HeaderHistorical/HeaderHistorical';
import HeaderMyAssumptions from 'components/HeaderMyAssumptions/HeaderMyAssumptions';
import HeaderStockSearch from 'components/HeaderStockSearch/HeaderStockSearch';
import React from 'react';
import './RowHeader.scss';

type Props = {
	stockTicker: string;
};

export default function RowHeader(props: Props) {
	return (
		<div id='row-header-container'>
			<HeaderStockSearch stockTicker={props.stockTicker} />
			<HeaderHistorical />
			<HeaderMyAssumptions />
		</div>
	);
}
