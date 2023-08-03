import { ChangeEvent, useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

const SignForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const URL = useLocation();

  const handleEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const emailInput = e.target.value;
    const gTLDRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmail(emailInput);
    setEmailValid(gTLDRegex.test(emailInput));
  }, []);

  const handlePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const passwordInput = e.target.value;
    const inputValid = passwordInput.length >= 8;

    setPassword(passwordInput);
    setPasswordValid(inputValid);
  }, []);

  const handleValid = useCallback(() => {
    return !(emailValid && passwordValid);
  }, [emailValid, passwordValid]);

  return (
    <div>
      <h3>아이디</h3>
      <input data-testid='email-input' type='email' onChange={handleEmail} />
      <h3>비밀번호</h3>
      <input
        data-testid='password-input'
        type='password'
        onChange={handlePassword}
      />
      <button data-testid='signup-button' disabled={handleValid()}>
        {URL.pathname === "/signup" ? "회원가입" : "로그인"}
      </button>
    </div>
  );
};

export default SignForm;
