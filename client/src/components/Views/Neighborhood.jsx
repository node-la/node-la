import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, CardContent, Typography, Button, Paper } from '@material-ui/core';
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
  paper: {
    padding: theme.spacing(3),
    margin: 'auto',
    maxWidth: 700,
  },
}));

const Neighborhood = ({ neighborhood, changeView, userPosts, neighbors, getNeighbor, }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h5" style={{ fontWeight: "bold", textAlign: "center", color: "white", marginTop: 15}}>Meet your neighbors in {neighborhood}:</Typography>
      {neighbors.map((neighbor) => {  
        return (
          <div>
            <p>
              <Paper className={classes.paper} elevation={3}>
                <Grid container spacing={3}>
                  <Grid item>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Button
                        size="large"
                        fullWidth="true"
                        variant="text"
                        style={{ color: '#00796b', fontWeight: "bold", cursor: 'pointer' }}
                        onClick={() => getNeighbor(neighbor.username)}
                      >{neighbor.username}</Button>
                      <Typography align="center">{neighbor.bio}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Neighborhood;
