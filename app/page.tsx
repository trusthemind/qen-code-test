import Image from "next/image";
import s from "./page.module.scss";
import { LoginForm } from "@/components/forms/LoginForm";

export default function Home() {
  return (
    <main className={s.main}>
      <LoginForm />
    </main>
  );
}
