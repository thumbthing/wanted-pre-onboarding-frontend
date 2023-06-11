import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { sign } from '../../request/Api';
import { StyledButton } from '../style';

interface signInButtonProps {
	id: string;
	password: string;
}

const SignInButton = ({ id, password }: signInButtonProps) => {
	const idValidation: boolean = id.includes('@');
	const passwordValidation: number = password.length;
	const request = 'signin';
	const navigate = useNavigate();

	const handleSignIn = useCallback(async () => {
		try {
			const response = await sign(id, password, request);
			const data = response?.data;

			const key: string = Object.keys(data)[0];
			const accessToken: string = Object.values(data)[0] as string;
			localStorage.setItem(key, accessToken);

			navigate('/todo');
		} catch (error) {
			console.log(error);
		}
	}, [id, password, request, navigate]);

	if (idValidation && passwordValidation > 7) {
		return (
			<SignInInputButton
				data-testid="signin-button"
				type="button"
				value={'로그인'}
				onClick={handleSignIn}
			/>
		);
	} else {
		return (
			<SignInInputButton
				data-testid="signin-button"
				type="button"
				value={`아이디 조건 : @ 포함되어야 합니다 \n 비밀번호 조건: 8자 이상이어야 합니다`}
				disabled
			/>
		);
	}
};

export default SignInButton;

const SignInInputButton = StyledButton;
