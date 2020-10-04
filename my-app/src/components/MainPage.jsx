import { useQuery } from 'urql';
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, makeStyles } from '@material-ui/core';
import { Redirect, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: ' 0px 4px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    backgroundColor: '#fff',
    padding: '40px 40px',
    display: 'flex',
    width: '600px',
    margin: '40px auto',
    cursor: 'pointer',
    [theme.breakpoints.down(860)]: {
      flexDirection: "column",
      alignItems: "center",
      width: '70vw',
    },
  },
  img: {
    width: '150px',
    height: '150px',
    [theme.breakpoints.down(660)]: {
      width: '150px',
      height: '150px',
    },
  },
  item_img: {
    width: '150px',
    paddingRight: "30px",
    [theme.breakpoints.down(660)]: {
      width: '150px',
      paddingRight: '0',
    },
  },
  header_text: {
    fontSize: 18,
    color: '#246497',
    textAlign: 'center',
  },
  item_text: {
    textAlign: 'justify',
    [theme.breakpoints.down(500)]: {
      textAlign: 'left',
    },
  },
  loader: {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    width: "100%",
    top: "50%",
  }
}))

const MainPage = () => {
  const classes = useStyles()
  const [state, setState] = useState('')
  const [res] = useQuery({
    query: ` query {
      posts {
        id
        name
        post_text
        img
      }
    }
  `,
  });

  useEffect(() => {
    if (!res.fetching) {
      setState(res.data.posts)
    }
  }, [res.fetching])

  let history = useHistory()

  if (res.fetching) return <Box className={classes.loader}><CircularProgress /></Box>;
  if (res.error) return <p>Errored!</p>;
  if (localStorage.getItem('token') === null) return <Redirect to='/login' />

  return (
    <>
      <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
        {state && state.map(e => (
          <Box className={classes.container} onClick={() => history.push(`/post/${e.id}`)}>
            <Box className={classes.item_img}>
              <Box>
                <img className={classes.img} src={e.img} alt='' />
              </Box>
              <p className={classes.header_text}>{e.name}</p>
            </Box>
            <Box mt="-5px" display="flex" alignItems="center">
              <p className={classes.item_text}>{e.post_text}</p>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default MainPage