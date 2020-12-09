import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ThemePage = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [currentTheme, setCurrentTheme] = useState('');

	useEffect(() => {
		fetch('/api/getTheme')
			.then(res => res.json())
			.then(
				result => {
					setIsLoaded(true);
					setCurrentTheme(JSON.stringify(result, null, 4));
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
		<SyntaxHighlighter language="json" style={docco}>
			{currentTheme}
		</SyntaxHighlighter>
	);
};

export default ThemePage;
