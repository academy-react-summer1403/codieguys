import axios from "axios";
import http from "../../interceptor";

export const forgetPasswordAPI = async (user) => {
  try {
    console.log("res:", user);
    const response = await http.post("/Sign/ForgetPassword", {
      email: user.email,
      baseUrl: user.baseUrl,
    });
    return response;
  } catch (error) {
    return false;
  }
};
export const resetConfirmValueAPI = async (user) => {
  try {
    const response = await http.get("/Sign/Reset/:ConfigValue", user);
    return response;
  } catch (error) {
    return false;
  }
};
export const resetPasswordAPI = async (user) => {
  try {
    const response = await http.post("/Sign/Reset", user);
    return response;
  } catch (error) {
    return false;
  }
};
