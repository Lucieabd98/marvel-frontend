import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorInput, setErrorInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://site--marvel-backend--txtnrrwcytwl.code.run/user/login",
        {
          email,
          password,
        }
      );
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorInput(error.message);
    }
  };

  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <input
          name={email}
          type="email"
          placeholder="E-mail"
          value={email}
          required
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          name={password}
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="button-login">
          <button type="submit">Se connecter</button>
        </div>
      </form>
      {errorInput === "Request failed with status code 400" && (
        <p className="errormessage container">Password or e-mail incorrect.</p>
      )}
      {errorInput === "Request failed with status code 500" && (
        <p className="errormessage container">Password or e-mail incorrect.</p>
      )}
    </>
  );
};

export default Login;
