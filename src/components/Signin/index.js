import React from "react";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon></Icon>
          <FormContent>
            <Form actions="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required></FormInput>
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required></FormInput>
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
export default SignIn;
