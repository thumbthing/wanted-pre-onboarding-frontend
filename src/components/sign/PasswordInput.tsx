import React, { ChangeEvent, useCallback } from 'react';
import { StyledUserInformationBox } from '../style';

interface PasswordInputProps {
  onChange: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ onChange }) => {
  const handlePasswordValidation = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return (
    <PasswordContainer>
      <span>비밀번호</span>
      <input
        data-testid="password-input"
        type="password"
        onChange={handlePasswordValidation}
      />
    </PasswordContainer>
  );
};

export default PasswordInput;

const PasswordContainer = StyledUserInformationBox;
