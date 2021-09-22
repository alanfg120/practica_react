import React, { useState } from "react";
import "./navbar.css";
import logo from "./../../../../assets/logo.png";
import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { SettingsOutlined, Menu as MenuIcon } from "@material-ui/icons";

export let NavBar = () => {
  const [menuSetting, setMenuSetting] = useState<null | HTMLElement>(null);

  const openMenuSetting = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuSetting(event.currentTarget);
  };

  const closeMenuSetting = () => setMenuSetting(null);

  return (
    <AppBar className="navbar" position="static" color="inherit" elevation={0}>
      <Toolbar variant="dense" disableGutters={true}>
        <img src={logo} className="logo" alt="Hola" />
        <Typography variant="h6" className="margin">
          Yo Compro Acacías
        </Typography>
        <h5 className="end">Alan Fabian Herrera Gomez</h5>
        <Avatar className="avatar">H</Avatar>
        <IconButton
          color="primary"
          onClick={openMenuSetting}
          aria-controls="simple-menu"
          aria-haspopup="true"
        >
          <SettingsOutlined />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={menuSetting}
          keepMounted={false}
          open={Boolean(menuSetting)}
          onClose={closeMenuSetting}
          PaperProps={{
            style: {
              transform: "translateY(25%)",
            },
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
