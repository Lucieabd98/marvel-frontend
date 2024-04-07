import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ handleToken }) => {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errorInput, setErrorInput] = useState("");

  const handleSumbit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://site--marvel-backend--txtnrrwcytwl.code.run/user/signup",
        {
          username,
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
      <form className="sign-up" onSubmit={handleSumbit}>
        <h2>Sign Up</h2>
        <input
          name={username}
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <input
          name={email}
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="button-signup">
          <button type="submit" className="signup">
            Sign Up
          </button>
        </div>
      </form>
      {errorInput === "Request failed with status code 409" && (
        <p className="errormessage container">E-mail already registered.</p>
      )}
      {errorInput === "Request failed with status code 400" && (
        <p className="errormessage container">Username is mandatory.</p>
      )}
    </>
  );
};

export default SignUp;
