import { styled } from "styled-components";
import { Sign } from "../request/Api";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface SignUpInformation {
  id: string;
  password: string;
  request: string;
}

const SignupButton: React.FC<SignUpInformation> = ({
  id,
  password,
  request,
}) => {
  const idValidation: boolean = id.includes("@");
  const passwordValidation: number = password.length;
  const navigate = useNavigate();

  const handleSignUp = useCallback(async () => {
    const response = await Sign(id, password, request);
    try {
      if (response.status === 201) {
        navigate(`/login`);
      }
    } catch (error) {
      throw error;
    }
  }, [id, password, request, navigate]);

  if (idValidation && passwordValidation > 7) {
    return (
      <StyledButton
        data-testid='signup-button'
        type='button'
        value={"회원가입"}
        onClick={handleSignUp}
      />
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

export default SignupButton;

const StyledButton = styled.input`
  display: flex;
  justify-content: space-evenly;
`;
