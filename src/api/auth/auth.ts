import instance from "../instance";

interface UserInformation {
  email: string;
  password: string;
}

export const signUp = async ({ email, password }: UserInformation) => {
  const data = {
    email,
    password,
  };

  try {
    const response = await instance.post(`/auth/signup`, data);
    console.log(response.status);

    return response;
  } catch (error) {
    console.log("sign up error : ", error);
    return null;
  }
};
