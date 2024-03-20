import { ILoginResponce } from "@/components/forms/LoginForm";
import { notification } from "@/utils/notification";
import axios, { AxiosError } from "axios";
import Cookies from "cookies-js";

interface IArguments {
  url: string;
  method: "POST" | "PUT" | "DELETE" | "GET";
  payload?: any;
}

export const fetchData = async ({ url, method, payload }: IArguments) => {
  let token: string | undefined = Cookies.get("access_token");
  let refresh_token: string | undefined = Cookies.get("refresh_token");
  let data;
  let error;

  !token &&
    (await axios
      .post("https://auth-qa.qencode.com/v1/auth/refresh-token", {
        refresh_token: refresh_token,
      })
      .then((response) => {
        const data: ILoginResponce = response.data;
        Cookies.set("access_token", data.access_token, { expires: data.token_expire });
        Cookies.set("refresh_token", data.refresh_token, { expires: data.refresh_token_expire });
        token = data.access_token;
        refresh_token = data.refresh_token;
      })
      .catch((err: AxiosError) => {}));

  await axios
    .request({
      url: "https://auth-qa.qencode.com/" + url,
      method: method,
      data: payload,
      headers: { "Content-Type": "application/json{}", Authorization: token },
    })
    .then((r) => {
      data = r;
    })
    .catch((err: AxiosError) => {
      error = err;
      if (err) err.request.status >= 400 && notification("error", "Something went wrong");
    });

  return { data, error };
};
