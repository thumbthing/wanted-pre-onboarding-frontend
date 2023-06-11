import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { sign } from "../../request/Api";

interface signInButtonProps {
  id: string;
  password: string;
  request: string;
}

const SignInButton = ({ id, password, request }: signInButtonProps) => {
  const idValidation: boolean = id.includes("@");
  const passwordValidation: number = password.length;
  const navigate = useNavigate();

  const handleSignIn = useCallback(async () => {
    try {
      const response = await sign(id, password, request);
      const data = response?.data;

      for (const key in data) {
        localStorage.setItem(key, data[key]);
      }
      navigate("/todo");
    } catch (error) {
      console.log(error);
    }
  }, [id, password, request, navigate]);

  if (idValidation && passwordValidation > 7) {
    return (
      <StyledButton
        data-testid='signin-button'
        type='button'
        value={"로그인"}
        onClick={handleSignIn}
      />
    );
  } else {
    return (
      <StyledButton
        data-testid='signin-button'
        type='button'
        value={`아이디 조건 : @ 포함 \n 비밀번호 조건: 8자 이상이어야 합니다`}
        disabled
      />
    );
  }
};

export default SignInButton;

const StyledButton = styled.input`
  display: flex;
  justify-content: space-evenly;
`;
