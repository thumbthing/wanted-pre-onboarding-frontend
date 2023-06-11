import { useCallback, useEffect, useState } from 'react';
import IdInput from '../components/sign/IdInput';
import PasswordInput from '../components/sign/PasswordInput';
import { useNavigate } from 'react-router-dom';
import SignUpButton from '../components/sign/SignUpButton';
import {
	StyledContainer,
	StyledHeader,
	StyledInputBox,
} from '../components/style';

const Register = () => {
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

	useEffect(() => {
		if (access_token) {
			navigate('/todo');
		}
	}, [navigate]);

	return (
		<SignUpContainer>
			<SignUpHeader
				onClick={() => {
					navigate('/');
				}}
			>
				<h1>회원가입 페이지</h1>
				<button onClick={() => navigate('/')}></button>
			</SignUpHeader>
			<SignUpInputBox>
				<IdInput onChange={handleIdChange} />
				<PasswordInput onChange={handlePasswordChange} />
				<SignUpButton id={id} password={password} />
			</SignUpInputBox>
		</SignUpContainer>
	);
};

export default Register;

const SignUpContainer = StyledContainer;

const SignUpHeader = StyledHeader;

const SignUpInputBox = StyledInputBox;
