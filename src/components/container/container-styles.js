import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 327px;
	margin-left: auto;
	margin-right: auto;
	overflow: hidden;
	border-radius: 0.5rem;

	@media screen and (width >= 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: fit-content;
	}
`;

export { StyledContainer };
