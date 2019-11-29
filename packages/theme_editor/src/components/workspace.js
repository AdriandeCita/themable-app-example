import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { EditorContext } from '@namespace/services';
import HomePage from '../pages/home';
import TextPage from '../pages/text';
import Toolbar from './toolbar';
import EditableContentPage from '../pages/editableContent';
import TypographyPage from '../pages/typography';

const Workspace = () => {
	const { stylerControls, showEditor } = useContext(EditorContext);

	return (
		<main className="workspace-area" style={{ display: 'flex' }}>
			{showEditor ? <Toolbar stylerControls={stylerControls} /> : null}

			<Route path="/" exact component={HomePage} />
			<Route path="/text" exact component={TextPage} />
			<Route
				path="/editable-content"
				exact
				component={EditableContentPage}
			/>
			<Route path="/typography" exact component={TypographyPage} />
		</main>
	);
};

export default Workspace;
