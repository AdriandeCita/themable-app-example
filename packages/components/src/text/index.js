import React from 'react';
import styled, { withTheme } from 'styled-components';
import { withEditor, Text as TextControl } from '@namespace/services';
import extractStyle from '../styleProvider';

const getStyle = ({ theme }) => extractStyle(theme, ['components.text.style']);

const View = styled.div`
	display: inline-block;

	${props => getStyle(props)}
`;

const Text = props => {
	const { children } = props;

	return <View>{children}</View>;
};

export default withEditor(withTheme(Text), {
	stylerControls: (
		<>
			<TextControl path="style.color" label="Color" />
			<TextControl path="style.background" label="Background" />
		</>
	),
});
