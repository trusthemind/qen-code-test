import { FormTitle } from "@/components/FormsTitle";
import { ForgotForm } from "@/components/forms/ForgotForm";
import { NewPasswordForm } from "@/components/forms/NewPasswordForm";
import { Card } from "antd";

export default function Forgot() {
  return (
    <main>
      <Card>
        <FormTitle text="Forgot Password?" />
        <ForgotForm />
        <NewPasswordForm/>
      </Card>
    </main>
  );
}
