import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Button } from '@material-ui/core';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

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

const Neighbor = ({ neighbor, neighborPosts, getNeighbors, toggleFavorite }) => {
  const classes = useStyles();
  return (
    <div>
<<<<<<< HEAD
      <Typography
        variant="h4"
        style={{ fontWeight: "bolder", textAlign: "center", color: "white" }}
      >
        {neighbor}
      </Typography>
      {neighborPosts.map((post, index) => (
=======
      <Typography variant="h5" style={{ fontWeight: "bolder", textAlign: "center", color: "white", marginTop: 15 }}>{neighbor}'s posts</Typography>
      {neighborPosts.map((post, index) =>
>>>>>>> 65b480d0e1e38b2f725dcc6f16593e4ca63a1c90
        <p>
          <Paper className={classes.paper} elevation={3} key={post.id}>
            <Grid container spacing={3}>
              <Grid item></Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Typography style={{float: 'left'}} gutterBottom id={index} variant="h5">
                    {post.title}
                  </Typography>
<<<<<<< HEAD
                  <FavoriteBorderIcon size="medium" id={post.id} onClick={() => {toggleFavorite(post.id, neighbor)}} />
                  <Typography variant="body2">{post.body}</Typography>
=======
                  <Typography variant="body2">{post.postBody}</Typography>
>>>>>>> 65b480d0e1e38b2f725dcc6f16593e4ca63a1c90
                </Grid>
                <Typography variant="subtitle2" color="textSecondary">
                  {moment(post.createdAt).fromNow()}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </p>
<<<<<<< HEAD
      ))}
      <Button
        size="large"
        fullWidth="true"
        variant="text"
        style={{ color: "white", fontWeight: "bold", cursor: "pointer" }}
        onClick={getNeighbors}
      >
        Back to your neighborhood
      </Button>
=======
      )}
      <div style={{ textAlign: "center" }}>
        <Button
          className={classes.button} 
          size="large"
          onClick={getNeighbors}
        >Back to your neighborhood</Button>
      </div>
>>>>>>> 65b480d0e1e38b2f725dcc6f16593e4ca63a1c90
    </div>
  );
}

export default Neighbor;