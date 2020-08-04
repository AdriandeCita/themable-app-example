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

	return <View theme={theme}>{options.content || <i>Default text</i>}</View>;
};

export default withEditor(withTheme(EditableText), {
	stylerControls: (
		<>
			<TextControl path="content" label="Content" />
			<TextControl path="style.width" label="width" />
			<TextControl path="style.padding" label="Padding" />
			<TextControl path="style.color" label="Color" />
			<TextControl path="style.background" label="Background" />
		</>
	),
});
