import { toast } from "react-toastify";

type Status = "error" | "success" | "info";

export const notification = (status: Status, message: string) => {
  const customId = message.replace(/ /g, "-").toLowerCase();
  const notify = () =>
    toast[status](message, {
      toastId: customId,
    });
  notify();
};
