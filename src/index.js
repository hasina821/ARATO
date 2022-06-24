import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Tables from "views/admin/Listedem";
import GestDemande from "views/admin/GererDemande";
import MonCompte from "views/admin/MyCount"
import TypeDemande from "views/admin/Typedemande"
import { DemandeContextProvider } from "utils/context/Demande";

ReactDOM.render(
  <BrowserRouter>
  <DemandeContextProvider>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Route path="/tables" exact component={Tables} />
      <Route path="/profile" exact component={MonCompte} />
      <Route path="/typedemande" exact component={TypeDemande}/>
      <Route path="/demande/:id" exact component={GestDemande} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
    </DemandeContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
