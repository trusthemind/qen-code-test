"use client";
import { FormTitle } from "@/components/FormsTitle";
import { ForgotPassword_EmailForm } from "@/components/forms/ForgotForm";
import { useAppSelector } from "@/redux/hooks";
import { ForgotComponents } from "@/utils/constans/constantsComponent";
import { Card } from "antd";

export default function Forgot() {
  const { currentStep } = useAppSelector((state) => state.forgot_steps);
  const component = ForgotComponents[currentStep as keyof typeof ForgotComponents];
  const text = currentStep == 0 ? "Forgot Password" : "Create New Password?";

  return (
    <main>
      <Card>
        <FormTitle text={text} />
        {component}
      </Card>
    </main>
  );
}
