import { useCallback, useState } from 'react';
import IdInput from '../components/sign/IdInput';
import PasswordInput from '../components/sign/PasswordInput';
import { useNavigate } from 'react-router-dom';
import SignInButton from '../components/sign/SignInButton';
import {
	StyledContainer,
	StyledHeader,
	StyledInputBox,
} from '../components/style';

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
		<LoginContainer>
			<LoginHeader
				onClick={() => {
					navigate('/');
				}}
			>
				<h1>로그인 페이지</h1>
				<button onClick={() => navigate('/')}>메인으로</button>
			</LoginHeader>
			<LoginInputBox>
				<IdInput onChange={handleIdChange} />
				<PasswordInput onChange={handlePasswordChange} />
				<SignInButton id={id} password={password} />
			</LoginInputBox>
		</LoginContainer>
	);
};

export default Login;

const LoginContainer = StyledContainer;

const LoginHeader = StyledHeader;

const LoginInputBox = StyledInputBox;
