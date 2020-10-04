import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false)

  const reidrectToLogin = () => {
    localStorage.clear()
    setRedirect(true)
  }

  if ( localStorage.getItem("token") === null ) return <Redirect to="/login" />
  if (redirect) return <Redirect to="/login" />;
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button onClick={reidrectToLogin} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}