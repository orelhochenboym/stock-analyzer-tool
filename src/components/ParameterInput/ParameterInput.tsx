import React, { FormEvent, useMemo, useState } from 'react';
import './ParameterInput.scss';

export default function ParameterInput() {
	const [low, setLow] = useState(0.0);
	const [mid, setMid] = useState(0.0);
	const [high, setHigh] = useState(0.0);

	const checkValidity = (inputValue: string) => {
		return (
			inputValue
				// Replaces all characters besides the range 0-9, dot('.'), and minus('-).
				.replace(/[^0-9.-]/g, '')

				// Replaces all duplicate dots('.) - so there can be only one dot.
				.replace(/(\..*?)\..*/g, '$1')

				// Limits the accuracy of the input value to 2 decimals.
				.replace(/^([0-9]*)(\.)([0-9]{2})(.)$/g, '$1$2$3')

				// Replaces all duplicate minuses. There can be only one minus at the start of the value string.
				.replace(/(-.*?)-.*/g, '$1')

				//Replaces the string '-0' with '0'.
				.replace(/^-0[^.]/g, '0')

				// Replaces duplicate zeros on the integer part of the number (left to the '.').
				.replace(/^0[^.]/g, '0')
		);
	};

	const onLowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.target.value = checkValidity(e.target.value);
		setLow(parseFloat(e.target.value));
	};

	const onMidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.target.value = checkValidity(e.target.value);
		setMid(parseFloat(e.target.value));
	};

	const onHighChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.target.value = checkValidity(e.target.value);
		setHigh(parseFloat(e.target.value));
	};

	return (
		<div id='row-input-assumptions-container'>
			<div className='input-container'>
				<input size={5} onChange={onLowChange} type='text' name='low-input' id='low-input'></input>
				<span className='percent'>%</span>
			</div>
			<div className='input-container'>
				<input size={5} onChange={onMidChange} type='text' name='mid-input' id='mid-input'></input>
				<span className='percent'>%</span>
			</div>
			<div className='input-container'>
				<input size={5} onChange={onHighChange} type='text' name='high-input' id='high-input'></input>
				<span className='percent'>%</span>
			</div>
		</div>
	);
}
