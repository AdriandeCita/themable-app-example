import React from 'react';
import styled, { withTheme } from 'styled-components';
import { withEditor, Text as TextControl } from '@namespace/services';
import extractStyle from '../styleProvider';
import pathFrom from '../utils/path-from';
import getSchemaGenerator from '../utils/schema-generator';

const stylesSchema = getSchemaGenerator('components.editableText.style');
const optionsSchema = getSchemaGenerator('components.editableText');

const getStyle = ({ theme, path }) =>
	extractStyle(theme, stylesSchema(pathFrom(path, 'style')));

const View = styled.div`
	display: inline-block;

	${props => getStyle(props)}
`;

const EditableText = props => {
	const { theme, path } = props;

	const options = extractStyle(theme, optionsSchema(path));

	return <View path={path}>{options.content || <i>Default text</i>}</View>;
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
