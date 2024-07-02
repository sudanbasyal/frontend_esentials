import { Form, Formik } from "formik";
import React from "react";
import FormikInput from "../FormFields/FormikInput";
import * as yup from "yup";
const LoginUser = () => {
  const validationSchema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {(formik) => {
          <Form>
            <FormikInput
              name="email"
              label="Email"
              type="string"
              required={true}
            ></FormikInput>
            <FormikInput
              name="password"
              label="Password"
              type="password"
              required={true}
            ></FormikInput>
          </Form>;
        }}
      </Formik>
    </div>
  );
};

export default LoginUser;
