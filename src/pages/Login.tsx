import { useCallback, useState } from "react";
import { styled } from "styled-components";
import IdInput from "../components/IdInput";
import PasswordInput from "../components/PasswordInput";

const Login = () => {
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
        <h1>로그인 페이지</h1>
      </div>
      <StyledInputBox>
        <IdInput onChange={handleIdChange} />
        <PasswordInput onChange={handlePasswordChange} />
        {id.includes("@") && password.length > 7 ? (
          <StyledButton
            data-testid='signin-button'
            type='button'
            value={"회원가입"}
          />
        ) : (
          <StyledButton
            data-testid='signin-button'
            type='button'
            value={`아이디 조건 : @ 포함 \n 비밀번호 조건: 8자 이상`}
            disabled
          />
        )}
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

const StyledButton = styled.input`
  display: flex;
  justify-content: space-evenly;
`;
