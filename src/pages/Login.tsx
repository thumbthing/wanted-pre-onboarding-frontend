import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import IdInput from "../components/IdInput";
import PasswordInput from "../components/PasswordInput";
import SigninButton from "../components/SigninButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [request] = useState<string>("signin");
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");

  const handleIdChange: (value: string) => void = useCallback((value) => {
    setId(value);
  }, []);

  const handlePasswordChange: (value: string) => void = useCallback((value) => {
    setPassword(value);
  }, []);

  useEffect(() => {
    if (access_token) {
      navigate("/todo");
    }
  }, [navigate, access_token]);

  return (
    <StyledContainer>
      <div>
        <h1>로그인 페이지</h1>
      </div>
      <StyledInputBox>
        <IdInput onChange={handleIdChange} />
        <PasswordInput onChange={handlePasswordChange} />
        <SigninButton id={id} password={password} request={request} />
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
