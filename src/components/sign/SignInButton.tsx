import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { sign } from '../../request/Api';
import { StyledButton } from '../style';

interface signInButtonProps {
	id: string;
	password: string;
}

const SignInButton = ({ id, password }: signInButtonProps) => {
	const request = 'signin';
	const isValid = id.includes('@') && password.length > 7;
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

	return (
		<SignInInputButton
			data-testid="signin-button"
			type="button"
			value={
				isValid
					? `  `
					: `아이디 조건 : @ 포함되어야 합니다 \n 비밀번호 조건: 8자 이상이어야 합니다`
			}
			onClick={handleSignIn}
			disabled={isValid ? false : true}
			style={
				isValid
					? {
							width: `54px`,
							height: `54px`,
							backgroundImage: `url(${process.env.PUBLIC_URL}/valid.jpeg)`,
							backgroundSize: `50px 50px`,
					  }
					: {
							width: `220px`,
							height: `40px`,
					  }
			}
		/>
	);
};

export default SignInButton;

const SignInInputButton = StyledButton;
