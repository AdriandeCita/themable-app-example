import React from 'react';
import styled, { withTheme } from 'styled-components';
import { withEditor, Text as TextControl } from '@namespace/services';
import extractStyle from '../styleProvider';
import getSchemaGenerator from '../utils/schema-generator';

const stylesSchema = getSchemaGenerator('components.text.style');
const getStyle = ({ theme, path }) =>
	extractStyle(theme, stylesSchema(`${path}.style`));

const View = styled.div`
	display: inline-block;

	${props => getStyle(props)}
`;

const Text = props => {
	const { children, path = 'components.text' } = props;

	return <View path={path}>{children}</View>;
};

export default withEditor(withTheme(Text), {
	stylerControls: (
		<>
			<TextControl path="style.color" label="Color" />
			<TextControl path="style.background" label="Background" />
		</>
	),
});
