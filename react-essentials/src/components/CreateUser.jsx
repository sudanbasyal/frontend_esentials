import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import axios from "axios";
import FormikInput from "../FormFields/FormikInput";
const CreateUser = () => {
  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
    // name: yup.string().required("Name is required"),
    // quantity: yup.number().required("Quantity is required"),
    // price: yup.number().required("Price is required"),
    // featured: yup.boolean().required("Featured is required"),
    // productImage: yup.string().required("Product Image is required"),
    // manufactureDate: yup.string().required("Manufacture Date is required"),
    // company: yup.string().required("Company is required"),
  });
  const initialValues = {
    // name: "",
    // quantity: 0,
    // price: 0,
    // featured: false,
    // productImage: "",
    // manufactureDate: "",
    // company: "",
    username: "",
    email: "",
    password: "",
  };
  const onSubmit = async (value, other) => {
    try {
      await axios({
        method: "post",
        url: "http://localhost:8000/api/v1/user",
        data: value,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        // enableReinitialize={true} this done because in the case of fetching and setting initial values, formik takes the initial values one time only so this property allows reinitializtion of initial values after fetching, used in update methods
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

            {/* <FormikCheckBox name="featured" label="featured" /> */}
            {/* <FormikInput
                  name="manufactureDate"
                  label="MFD"
                  type="date"
                  required={true}
                />
                <FormikSelect
                  name="company"
                  label="Company"
                  required={true}
                  options={companyOption}
                /> */}

            <button type="submit">Create User</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateUser;
