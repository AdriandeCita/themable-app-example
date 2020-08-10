import React from 'react';
import styled, { withTheme } from 'styled-components';
import { withEditor, Text as TextControl } from '@namespace/services';
import extractStyle from '../styleProvider';
import getSchemaGenerator from '../utils/schema-generator';

const stylesSchema = getSchemaGenerator('components.title.style');
const getStyle = ({ theme, size }) =>
	extractStyle(
		theme,
		stylesSchema(size ? `components.title.${size}.style` : null),
	);

const View = styled.div`
	display: block;

	${props => getStyle(props)}
`;

const Title = props => {
	const { children, size } = props;

	return <View size={size}>{children}</View>;
};

export default withEditor(withTheme(Title), {
	stylerControls: (
		<>
			<TextControl path="style.color" label="Color" />
			<TextControl path="style.fontSize" label="Font size" />
			<TextControl path="style.background" label="Background" />
		</>
	),
});
