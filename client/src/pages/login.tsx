import React from "react";
import { Formik, Form } from "formik";
import { Button, Box } from "@chakra-ui/core";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";
import { useMutation } from "urql";

interface LoginProps {}

const REGISTER_MUTATION = `mutation Login($username: String!, $password: String!) {
  login(options: {username: $username, password:$password}){
    user {
      username
      id
    }
  }
}`;

const Login: React.FC<LoginProps> = () => {
  const [, register] = useMutation(REGISTER_MUTATION);
  return (
    <Wrapper size="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          return register(values);
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
