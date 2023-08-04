import React, { useEffect, useState } from "react";
import SignForm from "../components/sign/SignForm";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [accessToken] = useState(localStorage.getItem("access_token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/todo");
    }
  }, [accessToken, navigate]);

  return (
    <div>
      <SignForm />
    </div>
  );
};

export default SignIn;
