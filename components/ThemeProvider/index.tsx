import { ConfigProvider, LayoutProps, ThemeConfig, theme } from "antd";
import React from "react";

const themeConfig: ThemeConfig = {
  components: {
    Card: { colorBorderSecondary: "none" },
    Button: {
      fontWeight: "bold",
      colorPrimaryText: "var(--white)",
      borderRadius: 8,
      defaultBorderColor: "var(--ligth-grey)",
      colorPrimaryBorder: "var(--primary-blue)",
    },
    Input: { activeBorderColor: "var(--primary-blue)", controlHeight: 36, activeShadow: "none" },
  },
  token: { colorPrimary: "#316FEA", fontSize: 14, fontFamily: "var(--grotes)" },
};

export const ThemeProvider = ({ children }: LayoutProps) => {
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};
