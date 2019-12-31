import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const MenuList = ({ changeView }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  //target clicked element on menu
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  //close menu when clicked off menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      {/* Drop down menu */}
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={() => {changeView("posts")}}>
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </StyledMenuItem>

        <StyledMenuItem onClick={() => {changeView("userPosts")}}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="User" />
        </StyledMenuItem>

        <StyledMenuItem onClick={() => {changeView("neighborhoods")}}>
          <ListItemIcon>
            <HomeWorkIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Neighborhoods" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <WbCloudyIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Weather" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

export default MenuList;