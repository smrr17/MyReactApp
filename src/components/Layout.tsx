import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CssBaseline,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Image } from "@mui/icons-material";
import Logo from "../assets/Icon/icon.png";

const useStyles = makeStyles({
  appBar: {
    zIndex: 1400, // Ensure the AppBar is above the Drawer
    backgroundColor: "purple",
  },
  menuButton: {
    marginRight: 20,
  },
  drawerPaper: {
    width: 250,
  },
  content: {
    flexGrow: 1,
    padding: 16,
    marginTop: 64, // Adjust based on AppBar height
  },
  container: {
    backgroundColor: "purple",
  },
  imgBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  img: {
    width: 90,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
  
  },
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const navigateTo = (path: string) => {
    navigate(path);
    handleDrawerClose();
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.container}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Box className={classes.imgBox}>
            <img className={classes.img} loading="lazy" src={Logo} />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.drawerPaper }}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button onClick={() => navigateTo("/")}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => navigateTo("/signin")}>
              <ListItemText primary="Sign in" />
            </ListItem>
            <ListItem button onClick={() => navigateTo("/signup")}>
              <ListItemText primary="Sign up" />
            </ListItem>
            {/* Add more list items as needed */}
          </List>
        </div>
      </Drawer>

      <Box component="main" className={classes.content}>
        {children}
      </Box>
    </div>
  );
};

export default Layout;
