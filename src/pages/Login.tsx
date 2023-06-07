import { styled } from "styled-components";

const Login = () => {
  return (
    <StyledLoginContainer>
      <div>
        <h1>로그인 페이지</h1>
      </div>
      <StyledLoginInputBox>
        <StyledEmailBox>
          <span>이메일</span>
          <input data-testid='email-input' />
        </StyledEmailBox>
        <StyledPasswordBox>
          <span>비밀번호</span>
          <input data-testid='password-input' />
        </StyledPasswordBox>
        <StyledLoginButton data-testid='signin-button'>
          회원가입
        </StyledLoginButton>
      </StyledLoginInputBox>
    </StyledLoginContainer>
  );
};

export default Login;

const StyledLoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledLoginInputBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledEmailBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledPasswordBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledLoginButton = styled.button`
  display: flex;
  justify-content: space-evenly;
`;
