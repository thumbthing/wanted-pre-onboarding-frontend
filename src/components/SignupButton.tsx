import { styled } from "styled-components";

interface userInformation {
  id: string;
  password: string;
}

const SignupButton: React.FC<userInformation> = ({ id, password }) => {
  const idValidation: boolean = id.includes("@");
  const passwordValidation: number = password.length;

  if (idValidation && passwordValidation > 7) {
    return (
      <StyledButton
        data-testid='signup-button'
        type='button'
        value={"회원가입"}
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
