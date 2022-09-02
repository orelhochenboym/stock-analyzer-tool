import React, { useState } from 'react';
import correctParameterInput from 'utils/correctParameterInput';
import './ParameterInputElement.scss';

type Props = {
	assumptionType: string;
	paramType: string;
};

export default function ParameterInputElement(props: Props) {
	const [assumption, setAssumption] = useState(0.0);

	function onAssumptionChange(e: React.ChangeEvent<HTMLInputElement>): void {
		e.target.value = correctParameterInput(e);
		setAssumption(parseFloat(e.target.value));
	}

	return (
		<div className='input-container'>
			<input type='text' onChange={onAssumptionChange} name={props.paramType + '-' + props.assumptionType} id='input-box' required />
			<i className='percent'>%</i>
		</div>
	);
}