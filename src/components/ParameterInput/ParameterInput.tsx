import React, { useState } from 'react';
import correctParameterInput from 'utils/correctParameterInput';
import './ParameterInput.scss';

export default function ParameterInput() {
	const [low, setLow] = useState(0.0);
	const [mid, setMid] = useState(0.0);
	const [high, setHigh] = useState(0.0);

	const onLowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.target.value = correctParameterInput(e);
		setLow(parseFloat(e.target.value));
	};

	const onMidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.target.value = correctParameterInput(e);
		setMid(parseFloat(e.target.value));
	};

	const onHighChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.target.value = correctParameterInput(e);
		setHigh(parseFloat(e.target.value));
	};

	return (
		<div id='row-input-assumptions-container'>
			<div className='input-container'>
				<input size={5} onChange={onLowChange} type='text' name='low-input' id='low-input' required></input>
				<span className='percent'>%</span>
			</div>
			<div className='input-container'>
				<input size={5} onChange={onMidChange} type='text' name='mid-input' id='mid-input' required></input>
				<span className='percent'>%</span>
			</div>
			<div className='input-container'>
				<input size={5} onChange={onHighChange} type='text' name='high-input' id='high-input' required></input>
				<span className='percent'>%</span>
			</div>
		</div>
	);
}
