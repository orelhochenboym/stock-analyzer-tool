import HistoricalHeader from 'components/HeaderHistorical/HeaderHistorical';
import MyAssumptionsHeader from 'components/HeaderMyAssumptions/HeaderMyAssumptions';
import React from 'react';
import './HeaderRow.scss';

export default function ToolHeader() {
	return (
		<div id='header-container'>
			<div id='labels-column'>.</div>
			<HistoricalHeader />
			<MyAssumptionsHeader />
		</div>
	);
}
