import React, { useState, useEffect, useContext } from 'react';
import { get, cloneDeep, set } from 'lodash';
import { ThemeServiceContext } from '../theme/service';

const EditorContext = React.createContext({});

const getAbsolutePath = (rootPath, localPath) => `${rootPath}.${localPath}`;

const EditorContextProvider = ({ children, theme: initialTheme }) => {
	const { updateTheme } = useContext(ThemeServiceContext);
	const [showEditor, setShowEditor] = useState(false);
	const [stylerControls, setStylerControls] = useState(null);
	const [activePath, setActivePath] = useState('');
	const [theme, setTheme] = useState(initialTheme);
	const [stylerMode, setStylerMode] = useState(false);

	useEffect(() => {
		setTheme(initialTheme);
	}, [initialTheme]);

	const update = ({ path, value }) => {
		const freshTheme = cloneDeep(theme);
		set(freshTheme, getAbsolutePath(activePath, path), value);
		fetch('/api/setTheme', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				theme: freshTheme,
			}),
		}).then(response => {
			if (response.status === 200) {
				updateTheme();
			}
		});
	};

	const getCurrentValue = path => {
		return get(theme, getAbsolutePath(activePath, path), '');
	};

	const openEditorToolbar = (
		path,
		{ stylerControls: givenStylerControls },
	) => {
		setStylerControls(givenStylerControls);
		setShowEditor(true);
		setActivePath(path);
	};

	const closeEditorToolbar = () => {
		setStylerControls(null);
		setShowEditor(false);
		setActivePath('');
	};

	const removeCurrentSubtree = () => {
		// TODO this is optimized for a quite narrow use case, may need some extending
		const pathKeys = activePath.split(/[.[]/);
		const path = pathKeys.slice(0, pathKeys.length - 1).join('.');

		const currentArrayData = get(theme, path, '') || [];
		const arrayIndexToRemove = parseInt(pathKeys[pathKeys.length - 1], 10);

		const freshTheme = cloneDeep(theme);
		set(
			freshTheme,
			path,
			currentArrayData.filter(
				(item, index) => index !== arrayIndexToRemove,
			),
		);

		fetch('/api/setTheme', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				theme: freshTheme,
			}),
		}).then(response => {
			if (response.status === 200) {
				updateTheme();
				closeEditorToolbar();
			}
		});
	};

	return (
		<EditorContext.Provider
			value={{
				showEditor,
				activePath,
				theme,
				update,
				getCurrentValue,
				removeCurrentSubtree,
				openEditorToolbar,
				stylerControls,
				closeEditorToolbar,
				stylerMode,
				setStylerMode,
			}}
		>
			{children}
		</EditorContext.Provider>
	);
};

export default EditorContext;

export { EditorContextProvider };
