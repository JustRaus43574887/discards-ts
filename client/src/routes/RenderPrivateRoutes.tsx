import React, { Suspense, lazy, Fragment, useState } from "react";

import { Switch, Route } from "react-router-dom";
import { BottomNavContext } from "../context/BottomNavContext";

import BottomNav from "../components/BottomNav";
import Lazy from "../components/loaders/Lazy";
import NotFound from "../components/loaders/NotFound";

const Main = lazy(() => import("../pages/private/main/Main"));
const Profile = lazy(() => import("../pages/private/profile/Profile"));
const Settings = lazy(() => import("../pages/private/profile/Settings"));
const Contacts = lazy(() => import("../pages/private/profile/Contacts"));
const Partners = lazy(() => import("../pages/private/profile/Partners"));
const About = lazy(() => import("../pages/private/profile/About"));
const Support = lazy(() => import("../pages/private/profile/Support"));
const Success = lazy(() => import("../pages/private/profile/Success"));

const RenderPrivateRoutes: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(true);

  return (
    <Fragment>
      <BottomNavContext.Provider value={{ setShowNav }}>
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<Lazy />}>
              <Main />
            </Suspense>
          </Route>
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/partners" component={Partners} />
          <Route path="/about" component={About} />
          <Route path="/support" component={Support} />
          <Route path="/success" component={Success} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BottomNavContext.Provider>
      <BottomNav showNav={showNav} />
    </Fragment>
  );
};

export default RenderPrivateRoutes;
