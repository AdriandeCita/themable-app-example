import styled from 'styled-components';
import extractStyle from '../styleProvider';

const getStyle = ({ theme }) => extractStyle(theme, ['style']);

const CellWrapper = styled.div`
	display: flex;
	align-items: center;

	${props => getStyle(props)}
`;

export default CellWrapper;
