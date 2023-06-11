import { useCallback, useState } from 'react';
import { styled } from 'styled-components';
import IdInput from '../components/sign/IdInput';
import PasswordInput from '../components/sign/PasswordInput';
import { useNavigate } from 'react-router-dom';
import SignInButton from '../components/sign/SignInButton';

const Login = () => {
	const [id, setId] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate = useNavigate();
	const access_token = localStorage.getItem('access_token');

	const handleIdChange: (value: string) => void = useCallback((value) => {
		setId(value);
	}, []);

	const handlePasswordChange: (value: string) => void = useCallback((value) => {
		setPassword(value);
	}, []);

	if (access_token) {
		navigate('/todo');
	}

	return (
		<StyledContainer>
			<SignHeader
				onClick={() => {
					navigate('/');
				}}
			>
				<h1>로그인 페이지</h1>
				<button onClick={() => navigate('/')}>메인으로</button>
			</SignHeader>
			<StyledInputBox>
				<IdInput onChange={handleIdChange} />
				<PasswordInput onChange={handlePasswordChange} />
				<SignInButton id={id} password={password} />
			</StyledInputBox>
		</StyledContainer>
	);
};

export default Login;

const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const SignHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	button {
		display: flex;
		justify-content: center;
		margin: auto;
		width: 40px;
		height: 40px;
	}
`;

const StyledInputBox = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;
