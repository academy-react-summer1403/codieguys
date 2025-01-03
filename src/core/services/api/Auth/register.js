import http from "../../interceptor";

export const sendVerifyMessageAPI = async (user) => {
  try {
    console.log("this is in api : ", user);
    const response = await http.post("/Sign/SendVerifyMessage", user);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const verifyMessageAPI = async (user) => {
  try {
    const response = await http.post("/Sign/VerifyMessage", user);
    return response;
  } catch (error) {
    return false;
  }
};

export const registerAPI = async (user) => {
  try {
    const response = await http.post("/Sign/Register", user);
    return response;
  } catch (error) {
    return false;
  }
};
