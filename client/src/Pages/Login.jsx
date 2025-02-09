import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setState] = useState({
    username: "",
    password: "",
  });
  const [login, { error }] = useMutation(LOGIN_USER);

  const logginFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const loginRes = await login({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });
      const token = loginRes.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...formState,
      [name]: value,
    });
  };

  if (error) {
    alert("There was a problem signing you In.");
  }

  return (
    <div className="mt-4 p-5 bg-dark text-white rounded">
      <h2>Login</h2>
      <div className="mb-3">
        <form onSubmit={logginFormSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              Username:
            </label>
            <input
              className="form-control"
              placeholder="Your Username"
              name="username"
              type="username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="pass">
              Password:
            </label>
            <input
              className="form-control"
              placeholder="Your Password"
              name="password"
              type="password"
              id="pass"
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="btn btn-outline-light" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Link to="/signup">Don't have an account? Click here.</Link>
    </div>
  );
}

export default Login;
