import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import IdInput from "../components/sign/IdInput";
import PasswordInput from "../components/sign/PasswordInput";
import SignUpButton from "../components/sign/SignUpButton";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [request] = useState<string>("signup");
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
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <h1>회원가입 페이지</h1>
      </div>
      <StyledInputBox>
        <IdInput onChange={handleIdChange} />
        <PasswordInput onChange={handlePasswordChange} />
        <SignUpButton id={id} password={password} request={request} />
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
