import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import IdInput from "../components/IdInput";
import PasswordInput from "../components/PasswordInput";

const Register = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleIdChange: (value: string) => void = useCallback((value) => {
    setId(value);
  }, []);

  const handlePasswordChange: (value: string) => void = useCallback((value) => {
    setPassword(value);
  }, []);

  return (
    <StyledContainer>
      <div>
        <h1>회원가입 페이지</h1>
      </div>
      <StyledInputBox>
        <IdInput onChange={handleIdChange} />
        <PasswordInput onChange={handlePasswordChange} />
        <StyledButton data-testid='signin-button'>회원가입</StyledButton>
      </StyledInputBox>
    </StyledContainer>
  );
};

export default Register;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledInputBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: space-evenly;
`;
