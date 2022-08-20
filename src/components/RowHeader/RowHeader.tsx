import HeaderHistorical from 'components/HeaderHistorical/HeaderHistorical';
import HeaderMyAssumptions from 'components/HeaderMyAssumptions/HeaderMyAssumptions';
import React from 'react';
import './RowHeader.scss';

export default function RowHeader() {
	return (
		<div id='row-header-container'>
			<div id='labels-header'>.</div>
			<HeaderHistorical />
			<HeaderMyAssumptions />
		</div>
	);
}
