import React, { useContext, useEffect } from "react";
import { BottomNavContext } from "../../../context/BottomNavContext";

import { useApolloClient } from "@apollo/react-hooks";
import ME_QUERY from "../../../apollo/graphql/queries/me";

import {
  BackArrow,
  ArrowRigth,
  Dollar,
  AddOutlined,
  Settings,
  Contacts,
  Partners,
  Share,
  Info,
  Faq,
} from "../../../icons";
import {
  Grid,
  ListItemText,
  ListItem,
  List,
  ListItemIcon,
} from "@material-ui/core";
import { useHistory, NavLink } from "react-router-dom";

const Profile: React.FC = () => {
  const history = useHistory();
  const client = useApolloClient();

  const { me } = client.readQuery({ query: ME_QUERY });

  const { setShowNav } = useContext(BottomNavContext);

  useEffect(() => {
    setShowNav(true);
  }, [setShowNav]);

  return (
    <div style={{ padding: 20, marginBottom: 70 }}>
      <div onClick={() => history.goBack()}>
        <BackArrow />
      </div>
      <p
        style={{
          fontWeight: 700,
          fontSize: 30,
          lineHeight: "36.57px",
          marginTop: 15,
        }}
      >
        {me?.name} {me?.surname}
      </p>

      <p
        style={{
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "17.07px",
          marginTop: 4,
          color: "#FF5151",
        }}
      >
        <NavLink to="/settings">
          Настройки профиля
          <span style={{ float: "right" }}>
            <ArrowRigth red />
          </span>
        </NavLink>
      </p>

      <Grid container style={{ margin: "20px 0" }}>
        <Grid item xs={2}>
          <Dollar />
        </Grid>
        <Grid item xs={4}>
          <p
            style={{
              margin: 0,
              fontSize: 18,
              fontWeight: 700,
              lineHeight: 1,
              color: "#141414",
            }}
          >
            500
          </p>
          <p
            style={{ margin: 0, fontSize: 12, lineHeight: 1, color: "#141414" }}
          >
            Мои монеты
          </p>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "end" }}>
          <AddOutlined />
        </Grid>
      </Grid>

      <List component="ul">
        <ListItem
          button
          style={{ paddingLeft: 0, paddingRight: 0 }}
          onClick={() => history.push("/settings")}
        >
          <ListItemIcon style={{ minWidth: 0, marginRight: 10 }}>
            <Settings />
          </ListItemIcon>
          <ListItemText
            disableTypography
            style={{
              fontWeight: 700,
              fontSize: 13,
              lineHeight: "15.85px",
            }}
            primary="НАСТРОЙКИ"
          />
          <ArrowRigth red />
        </ListItem>

        <ListItem
          button
          style={{ paddingLeft: 0, paddingRight: 0 }}
          onClick={() => history.push("/contacts")}
        >
          <ListItemIcon style={{ minWidth: 0, marginRight: 10 }}>
            <Contacts />
          </ListItemIcon>
          <ListItemText
            disableTypography
            style={{
              fontWeight: 700,
              fontSize: 13,
              lineHeight: "15.85px",
            }}
            primary="КОНТАКТЫ"
          />
          <ArrowRigth red />
        </ListItem>

        <ListItem
          button
          style={{ paddingLeft: 0, paddingRight: 0 }}
          onClick={() => history.push("/partners")}
        >
          <ListItemIcon style={{ minWidth: 0, marginRight: 10 }}>
            <Partners />
          </ListItemIcon>
          <ListItemText
            disableTypography
            style={{
              fontWeight: 700,
              fontSize: 13,
              lineHeight: "15.85px",
            }}
            primary="ПАРТНЕРЫ"
          />
          <ArrowRigth red />
        </ListItem>

        <ListItem
          button
          style={{ paddingLeft: 0, paddingRight: 0 }}
          onClick={() => history.push("/about")}
        >
          <ListItemIcon style={{ minWidth: 0, marginRight: 10 }}>
            <Info />
          </ListItemIcon>
          <ListItemText
            disableTypography
            style={{
              fontWeight: 700,
              fontSize: 13,
              lineHeight: "15.85px",
            }}
            primary="О ПРИЛОЖЕНИИ"
          />
          <ArrowRigth red />
        </ListItem>

        <ListItem
          button
          style={{ paddingLeft: 0, paddingRight: 0 }}
          onClick={() => history.push("/support")}
        >
          <ListItemIcon style={{ minWidth: 0, marginRight: 10 }}>
            <Faq />
          </ListItemIcon>
          <ListItemText
            disableTypography
            style={{
              fontWeight: 700,
              fontSize: 13,
              lineHeight: "15.85px",
            }}
            primary="FAQ"
          />
          <ArrowRigth red />
        </ListItem>

        <ListItem button style={{ paddingLeft: 0, paddingRight: 0 }}>
          <ListItemIcon style={{ minWidth: 0, marginRight: 10 }}>
            <Share />
          </ListItemIcon>
          <ListItemText
            disableTypography
            style={{
              fontWeight: 700,
              fontSize: 13,
              lineHeight: "15.85px",
            }}
            primary="РАССКАЗАТЬ О НАС"
          />
          <ArrowRigth red />
        </ListItem>
      </List>
    </div>
  );
};

export default Profile;
