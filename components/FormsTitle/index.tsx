import Image from "next/image";
import logo from "@/public/logo.svg";
import { Card } from "antd";
import { FC } from "react";
import s from "./style.module.scss";

interface TitleProps {
  text: string;
}

export const FormTitle: FC<TitleProps> = ({ text }) => {
  return (
    <Card
      styles={{
        header: { display: "flex", flexDirection: "column", alignItems: "center" },
        body: { display: "flex", flexDirection: "column", alignItems: "center" },
      }}
    >
      <Image src={logo} alt="logo" />
      <h2 className={s.textTitle}>{text}</h2>
    </Card>
  );
};
