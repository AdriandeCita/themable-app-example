import React, { useContext } from 'react';
import { EditorContext } from '@namespace/services';

const Header = () => {
	const { setStylerMode, stylerMode } = useContext(EditorContext);
	return (
		<header className="header-main">
			Theme Editor
			<button type="button" onClick={() => setStylerMode(!stylerMode)}>
				{stylerMode ? 'Styler mode enabled' : 'StylerModeDisabled'}
			</button>
		</header>
	);
};

export default Header;
