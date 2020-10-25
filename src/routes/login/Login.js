import React from 'react';
import { useDispatch } from 'react-redux';
import { userLoginRequestPost } from '../../modules/user';
import Header from "../../components/Nav/Header"
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (e) => {
    const { target: { value } = {} } = e;

    setEmail(value);
  }

  const handlePasswordChange = (e) => {
    const { target: { value } = {} } = e;

    setPassword(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password
    };

    await dispatch(userLoginRequestPost(payload));

    setPassword('');
    setEmail('');
  }

  return (
    <div>
      <Header />
      <h2>Login page</h2>

      <form onSubmit={handleSubmit}>
        <div className="email">
          Email:{" "}
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <div className="password">
          password:{" "}
          <input type="text" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;