import { useCallback, useState } from "react";
import { styled } from "styled-components";
import IdInput from "../components/IdInput";
import PasswordInput from "../components/PasswordInput";
import SignupButton from "../components/SignupButton";

const Register = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [request] = useState<string>("signup");

  const handleIdChange: (value: string) => void = useCallback((value) => {
    setId(value);
  }, []);

  const handlePasswordChange: (value: string) => void = useCallback((value) => {
    setPassword(value);
  }, []);

  const API_URL = "https://www.pre-onboarding-selection-task.shop/";

  const login = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledContainer>
      <div>
        <h1>회원가입 페이지</h1>
      </div>
      <StyledInputBox>
        <IdInput onChange={handleIdChange} />
        <PasswordInput onChange={handlePasswordChange} />
        <SignupButton id={id} password={password} request={request} />
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
