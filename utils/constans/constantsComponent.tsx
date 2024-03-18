import { ForgotPassword_EmailForm } from "@/components/forms/ForgotForm";
import { ForgotPasswordForms } from "./constants";
import { NewPasswordsForm } from "@/components/forms/NewPasswordForm";

export const ForgotComponents = {
  [ForgotPasswordForms.Email]: <ForgotPassword_EmailForm />,
  [ForgotPasswordForms.Passwords]: <NewPasswordsForm />,
};
