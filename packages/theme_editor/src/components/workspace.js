import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { EditorContext } from '@namespace/services';
import HomePage from '../pages/home';
import TextPage from '../pages/text';
import Toolbar from './toolbar';

const Workspace = () => {
	const { stylerControls, showEditor } = useContext(EditorContext);

	return (
		<main className="workspace-area" style={{ display: 'flex' }}>
			{showEditor ? <Toolbar stylerControls={stylerControls} /> : null}

			<Route path="/" exact component={HomePage} />
			<Route path="/text" exact component={TextPage} />
		</main>
	);
};

export default Workspace;
