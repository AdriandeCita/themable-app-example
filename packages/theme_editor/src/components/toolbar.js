import React, { useContext } from 'react';
import { EditorContext } from '@namespace/services';

const Toolbar = ({ stylerControls }) => {
	const { closeEditorToolbar } = useContext(EditorContext);
	return (
		<div className="editor-toolbar">
			<button
				onClick={closeEditorToolbar}
				type="button"
				className="close-button"
			>
				&times;
			</button>
			<h3>Edit styles</h3>
			<div className="editor-content">{stylerControls}</div>
		</div>
	);
};

export default Toolbar;
