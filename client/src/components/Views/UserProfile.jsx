import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FormLabel, Button, Paper, Input, InputLabel, FormHelperText, Container, TextField, Select } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 700,
  },
  // button: {
  //   background: 'linear-gradient(45deg, #00796b 30%, #43a047 90%)',
  //   borderRadius: 4,
  //   color: 'white',
  //   height: 48,
  //   padding: '0 30px',
  // },
  paper: {
    margin: theme.spacing(3),
    minWidth: 120,
    padding: theme.spacing(3),
    maxWidth: 700,
  }
}));


const UserProfile = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper aria-labelledby="form-title" className={classes.paper}>
        <FormLabel id="form-dialog-title"> Edit your bio </FormLabel>
          <TextField id="bio" label="Bio" type="bio" fullWidth />
          {/* selection for neighborhoods */}
          <TextField id="password" label="Password" type="password" fullWidth />
        {/* buttons in dialog box */}
          <Button color="primary">Save</Button>
      </Paper>
    </div>
  )
}

export default UserProfile;