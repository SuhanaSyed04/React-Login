import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const EyeIcon = styled.i`
  position: absolute;
  top: 60%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const CheckBoxLabel = styled.label`
  margin-left: 5px;
`;

const Button = styled.button`
  padding: 10px;
  margin: 5px 0;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
`;

const RegisterText = styled.p`
  margin-top: 20px;
`;

const OrangeLink = styled.span`
  color: orange;
  text-decoration: underline;
  cursor: pointer;
`;

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Heading>LOGIN</Heading>
      <Form>
        <InputWrapper>
          <Label>Login ID</Label>
          <Input type="text" placeholder="Enter login ID" />
        </InputWrapper>
        <InputWrapper>
          <Label>Password</Label>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <EyeIcon onClick={togglePasswordVisibility}>
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </EyeIcon>
        </InputWrapper>
        <CheckBoxWrapper>
          <div>
            <input type="checkbox" id="rememberMe" />
            <CheckBoxLabel htmlFor="rememberMe">Remember me</CheckBoxLabel>
          </div>
          <CheckBoxLabel>
            <OrangeLink>Change Password</OrangeLink>
          </CheckBoxLabel>
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <div>
            <input type="checkbox" id="termsConditions" />
            <CheckBoxLabel>Agree to 
              <OrangeLink>Terms &amp; Conditions</OrangeLink>
            </CheckBoxLabel>
          </div>
        </CheckBoxWrapper>
        <Button type="submit">LOGIN</Button>
      </Form>
      <RegisterText>
        Don't have an account? <OrangeLink>Register here</OrangeLink>
      </RegisterText>
    </Container>
  );
}

export default App;
