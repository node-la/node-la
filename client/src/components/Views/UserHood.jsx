import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Container, Card, CardContent } from '@material-ui/core';
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
}));

const UserHood = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Card>
        <CardContent>
          <List component="nav" aria-label="neighbors">
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
        </CardContent>
      </Card>
    </Container>
  )
}

export default UserHood;