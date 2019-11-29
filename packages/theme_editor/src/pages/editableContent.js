import React from 'react';
import { EditableText } from '@namespace/components';

const EditableContentPage = () => (
	<div className="editor-area">
		<h3>Text component</h3>
		<div className="working-area">
			<EditableText path="components.editableText" />
		</div>
	</div>
);

export default EditableContentPage;
