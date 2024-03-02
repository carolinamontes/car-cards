import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 327px;
	height: 432px;
	background-color: ${({ $color }) => $color};
	color: white;
	padding: 3rem;
	font-family: 'Lexend Deca', 'sans-serif';
	/* 
	&:first-child {
		border-radius: 8px 8px 0 0;
	}

	&:last-child {
		border-radius: 0 0 8px 8px;
	} */
`;

const StyledCardLogo = styled.img`
	width: 4rem;
`;

const StyledCardTitle = styled.h2`
	font-size: 2.5rem;
	font-family: 'Big Shoulders Display', sans-serif;
	margin-bottom: 1.5625rem;
`;

const StyledCardText = styled.p`
	font-size: 0.9375rem;
	font-weight: 200;
	line-height: 1.5625rem;
	width: 13.25rem;
	margin: 0;
`;

const StyledCardButton = styled.button`
	margin-top: auto;
	width: 9.125rem;
	padding: 0.9375rem 1.5625rem;
	border-radius: 1.5625rem;
	border: none;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			background-color: transparent;
			color: white;
			border: 1px solid white;
		}
	}
`;

export {
	StyledCard,
	StyledCardLogo,
	StyledCardTitle,
	StyledCardText,
	StyledCardButton
};
