import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import IdInput from "../components/IdInput";

const Register = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleIdChange: (value: string) => void = useCallback((value) => {
    setId(value);
  }, []);

  return (
    <StyledContainer>
      <div>
        <h1>회원가입 페이지</h1>
      </div>
      <StyledInputBox>
        <IdInput onChange={handleIdChange} />
        <StyledPasswordBox>
          <span>비밀번호</span>
          <input data-testid='password-input' />
        </StyledPasswordBox>
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

const StyledPasswordBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: space-evenly;
`;
