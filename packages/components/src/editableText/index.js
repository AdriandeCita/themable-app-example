import React from 'react';
import styled, { withTheme } from 'styled-components';
import { withEditor, Text as TextControl } from '@namespace/services';
import extractStyle from '../styleProvider';

const getStyle = ({ theme }) =>
	extractStyle(theme, ['components.editableText.style']);

const View = styled.div`
	display: inline-block;

	${props => getStyle(props)}
`;

const EditableText = props => {
	const { theme } = props;
	const options = extractStyle(theme, ['components.editableText']);

	return <View>{options.content || 'Default text'}</View>;
};

export default withEditor(withTheme(EditableText), {
	stylerControls: (
		<>
			<TextControl path="style.color" label="Color" />
			<TextControl path="style.background" label="Background" />
			<TextControl path="content" label="Content" />
		</>
	),
});
