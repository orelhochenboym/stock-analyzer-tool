import React from 'react';
import './ParameterLabel.scss';

type Props = {
	paramString: String;
};

export default function ParameterLabel(props: Props) {
	return <div id='param-label-text'>{props.paramString}</div>;
}
