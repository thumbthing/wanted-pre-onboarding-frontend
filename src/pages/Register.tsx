import { useCallback, useState } from "react";
import { styled } from "styled-components";
import IdInput from "../components/sign/IdInput";
import PasswordInput from "../components/sign/PasswordInput";
import { useNavigate } from "react-router-dom";
import SignUpButton from "../components/sign/SignUpButton";

const Register = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");

  const handleIdChange: (value: string) => void = useCallback((value) => {
    setId(value);
  }, []);

  const handlePasswordChange: (value: string) => void = useCallback((value) => {
    setPassword(value);
  }, []);

  if (access_token) {
    navigate("/todo");
  }

  return (
    <StyledContainer>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <h1>회원가입 페이지</h1>
        <button onClick={() => navigate("/")}>메인으로</button>
      </div>
      <StyledInputBox>
        <IdInput onChange={handleIdChange} />
        <PasswordInput onChange={handlePasswordChange} />
        <SignUpButton id={id} password={password} />
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
