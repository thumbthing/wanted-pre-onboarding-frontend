import { styled } from "styled-components";
import { sign } from "../../request/Api";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface SignUpButtonProps {
  id: string;
  password: string;
  request: string;
}

const SignUpButton = ({ id, password, request }: SignUpButtonProps) => {
  const idValidation: boolean = id.includes("@");
  const passwordValidation: number = password.length;
  const navigate = useNavigate();

  const handleSignUp = useCallback(async () => {
    const response = await sign(id, password, request);
    try {
      navigate(`/login`);
    } catch (error) {
      throw error;
    }
  }, [id, password, request, navigate]);

  if (idValidation && passwordValidation > 7) {
    return (
      <StyledButton data-testid='signup-button' onClick={handleSignUp}>
        회원가입
      </StyledButton>
    );
  } else {
    return (
      <StyledButton data-testid='signup-button' type='button' disabled>
        아이디 조건 : @ 포함되어야 합니다 \n 비밀번호 조건: 8자 이상이어야
        합니다
      </StyledButton>
    );
  }
};

export default SignUpButton;

const StyledButton = styled.button`
  display: flex;
  justify-content: space-evenly;
`;
