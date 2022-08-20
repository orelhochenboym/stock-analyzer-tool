import ParameterData from 'components/ParameterData/ParameterData';
import ParameterInput from 'components/ParameterInput/ParameterInput';
import ParameterLabel from 'components/ParameterLabel/ParameterLabel';
import React from 'react';
import './RowParameter.scss';

type Props = {
	paramName: string;
	stockTicker: string;
};

export default function RowParameter(props: Props) {
	return (
		<div id='param-row-container'>
			<ParameterLabel paramString={props.paramName} />
			<ParameterData stockTicker={props.stockTicker} />
			<ParameterInput />
		</div>
	);
}
