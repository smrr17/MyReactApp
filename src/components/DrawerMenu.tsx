import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Drawer, AppBar, Toolbar, IconButton, Typography, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

interface DrawerMenuProps {
  onClose: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <List>
      <ListItem button onClick={() => navigateTo('/signin')}>
        <ListItemText primary="Sign in" />
      </ListItem>
      <ListItem button onClick={() => navigateTo('/signup')}>
        <ListItemText primary="Sign up" />
      </ListItem>
      {/* Add more list items as needed */}
    </List>
  );
}

export default DrawerMenu;
