import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardContent, Typography } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    borderRadius: 3,
    borderShadow: 3,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const UserHood = ({ changeView, userPosts, neighbors }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      {neighbors.map((neighbor) => {  
        {console.log(neighbor)}
        return (
          <Card className={classes.card}>
            <CardContent>
              <Typography component="h2">{neighbor.username}</Typography>
              <Typography>{neighbor.username}</Typography>
            </CardContent>
          </Card>
        )
      })}
    </Container>
  )
}

export default UserHood;