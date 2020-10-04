import { useMutation } from 'urql';
import React, {  useState } from 'react';
import s from './css/login.module.css'
import { Box, Button, CircularProgress, TextField } from '@material-ui/core';
import { Redirect } from 'react-router-dom';


const LoginPage = () => {
  const [accountName, setAccountName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(false);
  const [res, executeQuery] = useMutation(
    `mutation ($email: String!, $password: String!) {
      login(email: $email, password: $password)
    }`,);

  const auth = (event) => {
    event.preventDefault();
    executeQuery({ email: accountName, password: password }).then(res => {
      if (res.data.login) {
        localStorage.setItem('token', res.data.login)
        setToken(true)
      }
    })
  }

  if (res.fetching) return <CircularProgress />;
  if (token || localStorage.getItem('token')) return <Redirect to="/" />;

  return (
    <>
      <form onSubmit={auth}>
        <div className={s.loginWrapper}>
          <div className={s.login}>
            <div className={s.loginInner}>
              <Box display="flex" justifyContent="center" mb="20px">
                Login Form
              </Box>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  value={accountName}
                  onInput={e => setAccountName(e.target.value)}
                  defaultValue="Admin"
                  variant="outlined"
                />
              </div>
              <Box mt="15px">
                <TextField
                  required
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  value={password}
                  onInput={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                  variant="outlined"
                  defaultValue="123"
                />
              </Box>
              <Box display="flex" justifyContent="center" mt="15px">
                <Button variant="contained" color="primary" type="submit">Login</Button>
              </Box>
              <Box display="flex" justifyContent="center">
                {res.error && <p style={{ color: "red" }}>Введен неверный <br /> логин или пароль</p>}
              </Box>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginPage