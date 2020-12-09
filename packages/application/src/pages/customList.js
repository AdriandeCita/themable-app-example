import React, { useEffect, useState } from 'react';
import { List } from '@namespace/components';

const CustomListPage = () => {
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

	return (
		<List
			data={{
				items,
			}}
		/>
	);
};

export default CustomListPage;
