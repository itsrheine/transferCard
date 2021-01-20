import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from "../../utils/mutations"
import Auth from "../../utils/auth";
import {
  CardHeading,
  CardBody,
  CardButton,
} from "../SignCard";

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="container my-1">
          <CardHeading><h2 className="passport-header">Login</h2></CardHeading>

        <CardBody>
          <form onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
                <input
                  placeholder="youremail@test.com"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}/>
            </div>
          
            <div className="flex-row space-between my-2">
                <input
                  placeholder="Password"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange}/>
              </div>
              {
                error ? <div>
                  <p className="error-text" >The provided credentials are incorrect</p>
                </div> : null
              }
              <div className="flex-row flex-end">
                <CardButton type="submit">
                    Submit
                </CardButton>
              </div>
            </form>
          </CardBody>
    </div>
  );
}


export default Login;
