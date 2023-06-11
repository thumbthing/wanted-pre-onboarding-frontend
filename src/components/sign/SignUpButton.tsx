import { sign } from '../../request/Api';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../style';

interface SignUpButtonProps {
	id: string;
	password: string;
}

const SignUpButton = ({ id, password }: SignUpButtonProps) => {
	const idValidation: boolean = id.includes('@');
	const passwordValidation: number = password.length;
	const request = 'signup';
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

	if (idValidation && passwordValidation > 7) {
		return (
			<SignUpInputButton
				data-testid="signup-button"
				type="button"
				onClick={handleSignUp}
				value={'회원가입'}
			/>
		);
	} else {
		return (
			<SignUpInputButton
				data-testid="signup-button"
				type="button"
				value={`아이디 조건 : @ 포함되어야 합니다 \n 비밀번호 조건: 8자 이상이어야 합니다`}
				disabled
			/>
		);
	}
};

export default SignUpButton;

const SignUpInputButton = StyledButton;
