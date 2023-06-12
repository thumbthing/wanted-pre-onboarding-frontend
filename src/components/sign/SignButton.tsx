import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../style';
import { signIn, signUp } from '../../request/Api';

interface SignButtonProps {
  id: string;
  password: string;
}

const SignButton = ({ id, password }: SignButtonProps) => {
  const isValid = id.includes('@') && password.length > 7;
  const navigate = useNavigate();
  const isLogin = window.location.pathname === '/login';

  const handleSignIn = useCallback(async () => {
    try {
      const response = await signIn(id, password);
      const data = response?.data;
      const key: string = Object.keys(data)[0];
      const accessToken: string = Object.values(data)[0] as string;
      localStorage.setItem(key, accessToken);

      if (response) {
        navigate('/todo');
      }
    } catch (error) {
      console.log('handleSignIn:', error);
    }
  }, [id, password, navigate]);

  const handleSignUp = useCallback(async () => {
    try {
      const response = await signUp(id, password);

      if (response) {
        navigate('/login');
      }
    } catch (error) {
      console.log('handleSignUp:', error);
    }
  }, [id, password, navigate]);

  return (
    <Button
      data-testid={isLogin ? 'signin-button' : 'signup-button'}
      type="button"
      value={
        isValid
          ? ''
          : `아이디 조건 : @ 포함되어야 합니다 \n 비밀번호 조건: 8자 이상이어야 합니다`
      }
      onClick={() => {
        {
          isLogin ? handleSignIn : handleSignUp;
        }
      }}
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

export default SignButton;

const Button = StyledButton;
