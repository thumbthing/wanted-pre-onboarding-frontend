import axios, { AxiosResponse } from "axios";

interface SignRequestBody {
  email: string;
  password: string;
}

const SignUp = async (
  email: string,
  password: string
): Promise<AxiosResponse> => {
  const url = `https://www.pre-onboarding-selection-task.shop/auth/signup`;
  const headers = {
    "Content-Type": "application/json",
  };
  const body: SignRequestBody = {
    email,
    password,
  };
  try {
    const response = await axios.post(url, body, { headers });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default SignUp;
