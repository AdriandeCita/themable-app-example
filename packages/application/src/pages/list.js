import React, { useEffect, useState } from 'react';
import { Image } from '@namespace/components';

const ListPage = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('/data/table')
			.then(res => res.json())
			.then(
				result => {
					setIsLoaded(true);
					setItems(result.items);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				errorResult => {
					setIsLoaded(true);
					setError(errorResult);
				},
			);
	}, []);

	if (!isLoaded) {
		return 'loading...';
	}

	if (error) {
		return error;
	}

	return <BasicList items={items} />;
};

const BasicList = ({ items }) => (
	<div className="list">
		<header className="table-header">
			<div className="column">Status</div>
			<div className="column">Avatar</div>
			<div className="column">First Name</div>
			<div className="column">Last Name</div>
			<div className="column">Games played</div>
		</header>
		{items.map(({ status, avatar, firstName, lastName, gamesPlayed }) => (
			<div className="row">
				<div className="column">
					**
					{status}
				</div>
				<div className="column">
					<Image source={`http://localhost:3012${avatar}`} />
				</div>
				<div className="column">{firstName}</div>
				<div className="column">{lastName}</div>
				<div className="column">{gamesPlayed}</div>
			</div>
		))}
	</div>
);

export default ListPage;
