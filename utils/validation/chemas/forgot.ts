import { ErrorInputs } from "@/utils/constans/errors";
import * as yup from "yup";

export const ForgotSchema = yup.object().shape({
    email: yup
      .string()
      .max(50)
      .email(ErrorInputs.fieldInvalid)
      .required(ErrorInputs.fieldReqiered)
      .matches(/^[-_a-zA-Z0-9@.]{1,50}$/, ErrorInputs.fieldInvalid),
    })