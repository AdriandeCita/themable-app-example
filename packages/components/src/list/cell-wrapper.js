import styled, { withTheme } from 'styled-components';
import extractStyle from '../styleProvider';
import pathFrom from '../utils/path-from';

const getStyle = ({ theme, path }) =>
	extractStyle(theme, [pathFrom(path, 'style')]);

const CellWrapper = styled.div`
	display: flex;
	align-items: center;

	${props => getStyle(props)}
`;

export default withTheme(CellWrapper);
