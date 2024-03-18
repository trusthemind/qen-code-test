import { Provider } from "react-redux";
import { Store } from "@/redux/store";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LayoutProps } from "@/.next/types/app/layout";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Provider store={Store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};
