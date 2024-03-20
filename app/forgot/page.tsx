import { FormTitle } from "@/components/FormsTitle";
import { ForgotPassword_EmailForm } from "@/components/forms/ForgotForm";
import { Card } from "antd";

export default function Forgot() {
  return (
    <main>
      <Card>
        <FormTitle text={"Forgot Password"} />
        <ForgotPassword_EmailForm />
      </Card>
    </main>
  );
}
