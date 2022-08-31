import React from 'react';

export default function correctStockTickerInput(e: React.ChangeEvent<HTMLInputElement>): string {
	// if (!e.target.value) {
	// 	return;
	// }
	return (
		e.target.value
			// Replaces any character which isn't a letter.
			.replace(/^[^a-zA-Z]$/, '')

			// Replaces any character which isn't a letter.
			.replace(/^([a-zA-Z]{5})(.)$/, '$1')
	);
}
