import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import React, { useEffect, useState } from "react";
import "./drawer.css";
import { Home, LocalMall, Message, List as ListIcon } from "@material-ui/icons";
import { BrowserRouter, Link, NavLink } from "react-router-dom";

export let DrawerComponet = () => {
  /* function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
    return <ListItem button component="a" {...props} />;
  }  */
  return (
    <div
      className="menu"
    >
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button component={Link} to="/home">
          <ListItemIcon>
            <Home className="primaryColor" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button component={Link} to="/home/tienda">
          <ListItemIcon>
            <LocalMall fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Tienda" />
        </ListItem>
        <ListItem button component={Link} to="/home/publicaciones">
          <ListItemIcon>
            <Message fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Publicaciones" />
        </ListItem>
        <ListItem button component={Link} to="/home/categorias">
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Categorias" />
        </ListItem>
      </List>
    </div>
  );
};
