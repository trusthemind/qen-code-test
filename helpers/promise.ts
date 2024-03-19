import { notification } from "@/utils/notification";
import axios, { AxiosError } from "axios";

interface IArguments {
  url: string;
  method: "POST" | "PUT" | "DELETE" | "GET";
  payload?: any;
}

export const fetchData = async ({ url, method, payload }: IArguments) => {
  let data;
  let error;
  await axios
    .request({ url: "https://auth-qa.qencode.com/" + url, method: method, data: payload })
    .then((r) => {
      data = r;
    })
    .catch((err: AxiosError) => {
      error = err;
      if (err) err.request.status >= 400 && notification("error", "Something went wrong");
    });
  return { data, error };
};
