import { ForgotPasswordForms } from "@/utils/constans/constants";
import { createSlice } from "@reduxjs/toolkit";

interface Step {
  id: number;
  name: string;
  completed: boolean;
}

interface Store {
  currentStep: number;
  steps: Step[];
}

const initialState = {
  currentStep: ForgotPasswordForms.Email,
  steps: [
    {
      id: ForgotPasswordForms.Email,
      name: "Email Forgot Form",
      completed: false,
    },
    {
      id: ForgotPasswordForms.Passwords,
      name: "Passwords Forgot Form",
      completed: false,
    },
  ],
} as Store;

export const stepSlice = createSlice({
  name: "forgot_steps",
  initialState,
  reducers: {
    SetNext: (state, { payload: { completed, ...rest } }) => {
      if (state.currentStep !== ForgotPasswordForms.Passwords) {
        state.steps[state.currentStep].completed = completed;
        state.currentStep++;
      }
    },
    
  },
});

export const { SetNext } = stepSlice.actions;
