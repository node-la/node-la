import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';

const UserHood = () => {
  console.log('hey');
  return (
    <List component="nav" aria-label="contacts">
      <ListItem button>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText primary="Chelsea Otakan" />
      </ListItem>
      <ListItem button>
        <ListItemText inset primary="Eric Hoffman" />
      </ListItem>
    </List>
  )
}

export default UserHood;