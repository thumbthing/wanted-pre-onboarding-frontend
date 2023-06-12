import { useCallback, useEffect, useState } from 'react';
import IdInput from '../components/sign/IdInput';
import PasswordInput from '../components/sign/PasswordInput';
import { useNavigate } from 'react-router-dom';
import {
	StyledContainer,
	StyledHeader,
	StyledInputBox,
} from '../components/style';
import SignButton from '../components/sign/SignButton';

const Login = () => {
	const [id, setId] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate = useNavigate();
	const accessToken = localStorage.getItem('access_token');

	const handleIdChange: (value: string) => void = useCallback((value) => {
		setId(value);
	}, []);

	const handlePasswordChange: (value: string) => void = useCallback((value) => {
		setPassword(value);
	}, []);

	useEffect(() => {
		if (accessToken) {
			navigate('/todo');
		}
	}, [accessToken, navigate]);

	return (
		<LoginContainer>
			<LoginHeader
				onClick={() => {
					navigate('/');
				}}
			>
				<h1>로그인 페이지</h1>
				<button onClick={() => navigate('/')}></button>
			</LoginHeader>
			<LoginInputBox>
				<IdInput onChange={handleIdChange} />
				<PasswordInput onChange={handlePasswordChange} />
			</LoginInputBox>
			<SignButton id={id} password={password} />
		</LoginContainer>
	);
};

export default Login;

const LoginContainer = StyledContainer;

const LoginHeader = StyledHeader;

const LoginInputBox = StyledInputBox;
