import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeServiceContext = React.createContext({});

const ThemeProviderService = ({ children }) => {
	const [theme, setTheme] = useState({});
	const [initiated, setInitiated] = useState(false);

	const updateTheme = (callback = () => {}) =>
		fetch('/api/getTheme')
			.then(res => res.json())
			.then(({ theme: fetchedTheme }) => {
				setTheme(fetchedTheme);
				callback();
			});

	useEffect(() => {
		if (!initiated) {
			updateTheme(setInitiated(true));
		}
	}, [initiated]);

	return (
		<ThemeServiceContext.Provider value={{ updateTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeServiceContext.Provider>
	);
};

export default ThemeProviderService;
export { ThemeServiceContext };
