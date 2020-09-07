import React from "react";
import { Formik, Form } from "formik";
import { Button, Box } from "@chakra-ui/core";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <Wrapper size="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              label="Username"
              placeholder="enter your username"
            ></InputField>
            <Box mt={4}>
              <InputField
                name="password"
                label="Password"
                placeholder="enter your password"
                type="password"
              ></InputField>
            </Box>
            <Button
              variantColor="teal"
              type="submit"
              mt={4}
              isLoading={isSubmitting}
            >
              login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Login;
