import React from "react";
import { Formik, Form } from "formik";
import { Button, Box } from "@chakra-ui/core";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const router = useRouter();
  const [, register] = useLoginMutation();
  return (
    <Wrapper size="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register(values);

          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response?.data?.login.user) {
            router.push("/");
          }
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
