import axios from "axios";
import { clearStorage, getItem } from "../common/storage.sevices";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  
  return response.data;
};

const onError = (err) => {
  // console.log(err);

  if (err?.response?.status === 401) {
    clearStorage();
    location.pathname = "/";
  }
  if (err?.response?.status >= 400 && err?.response?.status < 500) {
    alert("client error" + err?.response.status);
  }
  return err;
};

instance.interceptors.response.use(onSuccess, onError);
instance.interceptors.request.use((opt) => {
  const token = getItem("token");
  // opt.headers["messageTest"] = "Hello world!"
  opt.headers.Authorization = "Bearer " + token;
  return opt;
});
export default instance;
