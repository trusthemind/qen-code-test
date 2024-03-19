import { FC } from "react";
import { ToastContainer } from "react-toastify";

const NotificationContainer: FC = () => {
  return (
    <ToastContainer
      position="bottom-left"
      pauseOnHover
      closeOnClick
      autoClose={5000}
      newestOnTop
      hideProgressBar={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="light"
      limit={1}
    />
  );
};

export default NotificationContainer;
