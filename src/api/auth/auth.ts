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
    return response;
  } catch (error) {
    console.log("sign up error : ", error);
    return null;
  }
};

export const signIn = async ({ email, password }: UserInformation) => {
  const data = {
    email,
    password,
  };

  try {
    const response = await instance.post(`/auth/signin`, data);
    return response;
  } catch (error) {
    console.log("sign in error : ", error);
    return null;
  }
};
