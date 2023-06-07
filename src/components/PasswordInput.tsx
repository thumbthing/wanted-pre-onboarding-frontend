import React, { ChangeEvent, useCallback } from "react";
import styled from "styled-components";

interface PasswordInputProps {
  onChange: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ onChange }) => {
  const handlePasswordValidation = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.length > 8) {
        console.log("password is longer then 8");
      } else {
        console.log("password is too short");
      }
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <StyledPasswordBox>
      <span>비밀번호</span>
      <input
        data-testid='password-input'
        type='password'
        onChange={handlePasswordValidation}
      />
    </StyledPasswordBox>
  );
};

export default PasswordInput;

const StyledPasswordBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;
