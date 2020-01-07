import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Container } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    padding: theme.spacing(3),
    margin: 'auto',
    maxWidth: 700,
  },
}));

const UserHood = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <List className={classes.list} component="nav" aria-label="contacts">
        <ListItem button>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="Chelsea Otakan" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText inset primary="Eric Hoffman" />
        </ListItem>
      </List>
    </Container>
  )
}

export default UserHood;