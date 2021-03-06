import React from 'react';
import styled, { withTheme } from 'styled-components';
import { withEditor, Text as TextControl } from '@namespace/services';
import extractStyle from '../styleProvider';

const getStyle = ({ theme, size }) =>
	extractStyle(
		theme,
		[
			`components.title.style`,
			size ? `components.title.${size}.style` : null,
		].filter(Boolean),
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
