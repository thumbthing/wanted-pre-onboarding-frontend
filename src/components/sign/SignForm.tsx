import { ChangeEvent, useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signUp } from "../../api/auth/auth";

const SignForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const URL = useLocation();
  const navigate = useNavigate();

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

  const handleSignUp = useCallback(async () => {
    try {
      const response = await signUp({ email, password });
      if (response?.status === 201) {
        alert("회원가입이 완료되었습니다.");
        navigate("/");
      } else {
        alert("회원가입에 실패했습니다");
      }
    } catch (error) {
      console.log("sign up error : ", error);
    }
  }, [email, password, navigate]);

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
      <button
        data-testid='signup-button'
        disabled={handleValid()}
        onClick={handleSignUp}
      >
        {URL.pathname === "/signup" ? "회원가입" : "로그인"}
      </button>
    </div>
  );
};

export default SignForm;
