import { sign } from '../../request/Api';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../style';

interface SignUpButtonProps {
	id: string;
	password: string;
}

const SignUpButton = ({ id, password }: SignUpButtonProps) => {
	const request = 'signup';
	const isValid = id.includes('@') && password.length > 7;
	const navigate = useNavigate();

	const handleSignUp = useCallback(async () => {
		try {
			const response = await sign(id, password, request);
			if (response) {
				navigate(`/login`);
			}
		} catch (error) {
			console.log(error);
		}
	}, [id, password, request, navigate]);

	return (
		<SignUpInputButton
			data-testid="signup-button"
			type="button"
			value={
				isValid
					? '로그인'
					: `아이디 조건 : @ 포함되어야 합니다 \n 비밀번호 조건: 8자 이상이어야 합니다`
			}
			onClick={handleSignUp}
			disabled={isValid ? false : true}
		/>
	);
};

export default SignUpButton;

const SignUpInputButton = StyledButton;
