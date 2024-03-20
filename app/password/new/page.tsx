import { FormTitle } from "@/components/FormsTitle";
import { NewPasswordsForm } from "@/components/forms/NewPasswordForm";
import { Card } from "antd";
import { Suspense } from "react";

export default function PasswordNew() {
  return (
    <Suspense>
    <main>
      <Card>
        <FormTitle text={"Create New Password?"} />
        <NewPasswordsForm/>
      </Card>
    </main>
    </Suspense>
  );
}
