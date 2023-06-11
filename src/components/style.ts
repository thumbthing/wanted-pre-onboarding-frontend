import { styled } from 'styled-components';

export const StyledButton = styled.input`
	display: flex;
	justify-content: space-evenly;
	color: black;
`;

export const StyledUserInformationBox = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 10px;
`;

export const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const StyledHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	button {
		display: flex;
		justify-content: center;
		margin: auto;
		margin-left: 10px;
		width: 40px;
		height: 40px;
		background-image: url(${process.env.PUBLIC_URL}/home.png);
		background-size: 36px 36px;
	}
`;

export const StyledInputBox = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;
