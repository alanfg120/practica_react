import { createTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { HomeView } from "./pages/home/views/home.view";
import { LoginPage } from "./pages/login/view/login.page";
import { PublicacionesProvider } from "./pages/publicaciones/state/publicaciones.provaider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fe4567",
    },
  },
});

function App() {
  return (
    <PublicacionesProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/home" render={()=><HomeView/>}>
          
            </Route>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route render={() => <h1>Hola</h1>} />
          </Switch>
        </Router>
      </ThemeProvider>
    </PublicacionesProvider>
  );
}

export default App;
