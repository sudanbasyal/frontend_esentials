import React, { useEffect } from "react";
import { useCreateUserMutation } from "../../services/api/userService";
import { Form, Formik } from "formik";
import FormikInput from "../../FormFields/FormikInput";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
const CreateUserUsingRTK = () => {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const [
    createUser,
    {
      isError: isErrorCreateUser,
      isSuccess: isSuccessCreateUser,
      isLoading: isLoadingCreateUser,
      data: dataCreateUser,
      error: errorCreateUser,
    },
  ] = useCreateUserMutation();
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const onSubmit = async (value, other) => {
    try {
      await createUser(value);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (isSuccessCreateUser) {
      navigate("/users");
      console.log("User created successfully");
    }
    console.log("failed");
  }, [isSuccessCreateUser]);
  useEffect(() => {
    if (isErrorCreateUser) {
      console.log(errorCreateUser?.error);
    }
  }, [isErrorCreateUser, errorCreateUser?.error]);
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        // enableReinitialize={true} this is done because in the case of fetching and setting initial values, formik takes the initial values one time only so this property allows reinitializtion of initial values after fetching, used in update methods
      >
        {(formik) => (
          <Form>
            {/* <FormikInput name="name" label="Name" type="text" required={true} /> */}
            <FormikInput
              name="username"
              label="Username"
              type="string"
              required={true}
            />
            <FormikInput
              name="email"
              label="Email"
              type="email"
              required={true}
            />
            <FormikInput
              name="password"
              label="Password"
              type="password"
              required={true}
            ></FormikInput>
            <button type="submit">
              {isLoadingCreateUser?<div>Creating User...</div>:
              <div>Create User</div>}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateUserUsingRTK;
