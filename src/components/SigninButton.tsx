import { styled } from "styled-components";

interface userInformation {
  id: string;
  password: string;
}

const SigninButton: React.FC<userInformation> = ({ id, password }) => {
  const idValidation: boolean = id.includes("@");
  const passwordValidation: number = password.length;

  if (idValidation && passwordValidation > 7) {
    return (
      <StyledButton
        data-testid='signin-button'
        type='button'
        value={"로그인"}
      />
    );
  } else {
    return (
      <StyledButton
        data-testid='signin-button'
        type='button'
        value={`아이디 조건 : @ 포함 \n 비밀번호 조건: 8자 이상이어야 합니다`}
        disabled
      />
    );
  }
};

export default SigninButton;

const StyledButton = styled.input`
  display: flex;
  justify-content: space-evenly;
`;
