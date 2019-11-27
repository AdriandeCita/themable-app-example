import React from 'react';
import styled from 'styled-components';

const View = styled.div`
	color: red;
`;

const Text = props => {
	const { children } = props;

	return <View>{children}</View>;
};

export default Text;
