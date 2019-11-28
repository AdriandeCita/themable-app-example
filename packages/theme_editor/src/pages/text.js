import React from 'react';
import { Text } from '@namespace/components';

const TextPage = () => (
	<div className="editor-area">
		<h3>Text component</h3>
		<div className="working-area">
			<Text path="components.text">Some text sample</Text>
		</div>
	</div>
);

export default TextPage;
