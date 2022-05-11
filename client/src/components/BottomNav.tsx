import React, { useEffect } from "react";
import { useHistory, withRouter, RouteComponentProps } from "react-router-dom";

import {
  BottomNavigation,
  BottomNavigationAction,
  AppBar,
  makeStyles,
} from "@material-ui/core";

import { Catalog, My, Profile } from "../icons";

const useStyles = makeStyles({
  root: {
    padding: "0 40px",
    height: "70px",
  },
  label: {
    "& .Mui-selected": {
      color: "#FF5151",
      fontSize: 12,
      fontWeight: 600,
    },
  },
});

type TValue = number | null;

type TProps = RouteComponentProps & {
  showNav: boolean;
};

const BottomNav: React.FC<TProps> = ({ showNav }) => {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState<TValue>(null);

  useEffect(() => {
    if (history.location.pathname === "/catalog") setValue(0);
    if (history.location.pathname === "/") setValue(1);
    if (history.location.pathname === "/profile") setValue(2);
  }, [history.location.pathname]);

  return (
    <AppBar
      component="div"
      position="fixed"
      style={{
        top: "auto",
        bottom: 0,
        boxShadow: "none",
        display: showNav ? "flex" : "none",
      }}
    >
      <BottomNavigation
        className={classes.root}
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          onClick={() => history.push("/catalog")}
          disableTouchRipple
          className={classes.label}
          label="Каталог"
          icon={<Catalog active={value === 0} />}
        />
        <BottomNavigationAction
          onClick={() => history.push("/")}
          disableTouchRipple
          className={classes.label}
          label="Мои"
          icon={<My active={value === 1} />}
        />
        <BottomNavigationAction
          onClick={() => history.push("/profile")}
          disableTouchRipple
          className={classes.label}
          label="Профиль"
          icon={<Profile active={value === 2} />}
        />
      </BottomNavigation>
    </AppBar>
  );
};

export default withRouter(BottomNav);
