import HistoricalHeader from 'components/HistoricalHeader/HistoricalHeader';
import MyAssumptionsHeader from 'components/MyAssumptionsHeader/MyAssumptionsHeader';
import React from 'react';
import './HeaderRow.scss';

export default function ToolHeader() {
	return (
		<div id='header-container'>
			<HistoricalHeader />
			<MyAssumptionsHeader />
		</div>
	);
}
