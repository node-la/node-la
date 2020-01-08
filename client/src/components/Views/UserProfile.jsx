import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar, FormLabel, Button, Paper, TextField } from '@material-ui/core';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    background: 'linear-gradient(45deg, #00796b 30%, #43a047 90%)',
    borderRadius: 4,
    color: 'white',
    padding: theme.spacing(1),
    margin: '10px',
  },
  paper: {
    margin: theme.spacing(3),
    minWidth: 120,
    padding: theme.spacing(1),
    maxWidth: 700,
  }
}));


const UserProfile = ({updateUserBio}) => {
  const classes = useStyles();
  const [bio, setUserBio] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    updateUserBio(bio);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <Paper aria-labelledby="form-title" className={classes.paper}>
        <FormLabel className="formLabel" id="form-dialog-title"> Edit your bio </FormLabel>
          <TextField id="bio" label="Bio" type="bio" value={bio} onChange={(e) => setUserBio(e.target.value)} fullWidth />
        <Button className={classes.button} color="primary" onClick={handleClick}>Save</Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} color="success">
            Bio saved!
          </Alert>
        </Snackbar>
      </Paper>
    </div>
  )
}

export default UserProfile;