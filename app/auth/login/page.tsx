import { FormTitle } from "@/components/FormsTitle";
import { LoginForm } from "@/components/forms/LoginForm";
import github from "@/assets/images/github.svg";
import chrome from "@/assets/images/chrome.svg";
import Image from "next/image";
import s from "./style.module.scss";
import { Button, Card } from "antd";

export default function Login() {
  return (
    <main>
      <Card className={s.loginCard}>
        <FormTitle text="Log in to your account" />
        <Card styles={{ body: { display: "flex", justifyContent: "center", gap: "2rem" } }}>
          <Button
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              border: "1px solid var(--ligth-grey)",
            }}
            className={s.button}
          >
            <Image src={chrome} alt="chrome ico" />
            Google
          </Button>
          <Button
            type="default"
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              border: "1px solid var(--ligth-grey)",
            }}
            className={s.button}
          >
            <Image src={github} alt="github ico" />
            Github
          </Button>
        </Card>
        <p className={s.lineBlock}>
          <span>or</span>
        </p>

        <LoginForm />
      </Card>
    </main>
  );
}
