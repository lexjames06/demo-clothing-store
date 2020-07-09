import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import Register from '../../components/register/register.component';

import { SignInAndRegisterContainer } from './sign-in-and-register.styles';

const SignInAndRegister = () => (
    <SignInAndRegisterContainer>
        <SignIn />
        <Register />
    </SignInAndRegisterContainer>
);

export default SignInAndRegister;