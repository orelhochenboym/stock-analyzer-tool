import RowHeader from 'components/RowHeader/RowHeader';
import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {
	stockTicker: string;
};

export default function Home(props: Props) {
	return (
		<>
			{/* <RowHeader stockTicker={props.stockTicker} /> */}
			<h1>Home Page</h1>
			<Outlet />
		</>
	);
}
