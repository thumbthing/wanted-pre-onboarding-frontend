import { useState } from "react";
import { styled } from "styled-components";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledContainer>
      <div>
        <h1>로그인 페이지</h1>
      </div>
      <StyledInputBox>
        <StyledIdBox>
          <span>이메일</span>
          <input data-testid='email-input' />
        </StyledIdBox>
        <StyledPasswordBox>
          <span>비밀번호</span>
          <input data-testid='password-input' />
        </StyledPasswordBox>
        <StyledButton data-testid='signin-button'>로그인</StyledButton>
      </StyledInputBox>
    </StyledContainer>
  );
};

export default Login;

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

const StyledIdBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
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
