import { styled } from "styled-components";
import { sign } from "../../request/Api";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SignUpButtonProps {
  id: string;
  password: string;
}

const SignUpButton = ({ id, password }: SignUpButtonProps) => {
  const idValidation: boolean = id.includes("@");
  const passwordValidation: number = password.length;
  const request: string = "signup";
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
      <StyledButton
        data-testid='signup-button'
        type='button'
        onClick={handleSignUp}
      >
        회원가입
      </StyledButton>
    );
  } else {
    return (
      <StyledButton
        data-testid='signup-button'
        type='button'
        value={`아이디 조건 : @ 포함되어야 합니다 \n 비밀번호 조건: 8자 이상이어야 합니다`}
        disabled
      />
    );
  }
};

export default SignUpButton;

const StyledButton = styled.input`
  display: flex;
  justify-content: space-evenly;
`;
