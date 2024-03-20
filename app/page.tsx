"use client";
import { Card, List } from "antd";
import s from "./page.module.scss";
import Link from "next/link";
import { AppRoutes } from "@/utils/constans/constants";

export default function Home() {
  return (
    <main className={s.main}>
      <Card style={{ minWidth: "14rem" }}>
        <List
          style={{ border: "1px solid var(--primary-blue)", borderRadius: "1rem", padding: "1rem" }}
        >
          <List.Item>
            <Link href={AppRoutes.LOGIN}>Login</Link>
          </List.Item>
          <List.Item>
            <Link href={AppRoutes.FORGOT}>Forgot Password</Link>
          </List.Item>
          <List.Item>
            <Link href={AppRoutes.PASSWORD_SET}>Password Set</Link>
          </List.Item>
        </List>
      </Card>
    </main>
  );
}
