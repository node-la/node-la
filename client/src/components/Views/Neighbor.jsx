import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
  },
  button: {
    background: 'linear-gradient(45deg, #00796b 30%, #43a047 90%)',
    borderRadius: 4,
    color: 'white',
    height: 48,
    padding: '0 30px',
    // margin: 'auto'
  },
}));

const Neighbor = ({ neighbor, neighborPosts, getNeighbors }) => {
  const classes = useStyles();
  return (
    <div style={{textAlign: "center"}}>
      <Typography variant="h4" style={{ fontWeight: "bolder", textAlign: "center", color: "white" }}>{neighbor}'s posts</Typography>
      {neighborPosts.map((post, index) =>
        <p>
          <Paper className={classes.paper} elevation={3} key={post.id}>
            <Grid container spacing={3}>
              <Grid item>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Typography gutterBottom id={index} variant="h5">
                    {post.title}
                  </Typography>
                  <Typography variant="body2">{post.postBody}</Typography>
                </Grid>
                <Typography variant="subtitle2" color="textSecondary">{moment(post.createdAt).fromNow()}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </p>
      )}
      <Button
        className={classes.button} 
        size="large"
        variant="contained"
        align="center"
        // style={{ color: 'white', fontWeight: "bold", cursor: 'pointer' }}
        onClick={getNeighbors}
      >Back to your neighborhood</Button>
    </div>
  )
}

export default Neighbor;