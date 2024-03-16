import { ErrorInputs } from "@/utils/constans/errors";
import * as yup from "yup";

export const NewPasswordSchema = yup.object().shape({
      password: yup
      .string()
      .min(8, ErrorInputs.fieldInvalid)
      .required(ErrorInputs.fieldReqiered)
      .matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/,ErrorInputs.fieldInvalid),
      repeated_password: yup
      .string()
      .oneOf([yup.ref('password')], ErrorInputs.fieldDoestMatchPreivous)
      .required(ErrorInputs.fieldReqiered)
  });
  