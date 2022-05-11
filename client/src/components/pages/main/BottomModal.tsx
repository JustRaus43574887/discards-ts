import React from "react";
import { NavLink } from "react-router-dom";
import { SwipeableDrawer } from "@material-ui/core";
import { Camera, Dots } from "../../../icons";
const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

type TModal = {
  drawerState: boolean;
  toggleDrawer: (state: boolean) => void;
};

const BottomModal: React.FC<TModal> = ({ drawerState, toggleDrawer }) => {
  return (
    <SwipeableDrawer
      elevation={40}
      BackdropProps={{
        style: { background: "transparent" },
      }}
      PaperProps={{
        style: {
          padding: "0 40px",
          height: "75vh",
          borderRadius: "25px 25px 0px 0px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
        },
      }}
      anchor="bottom"
      open={drawerState}
      onOpen={() => toggleDrawer(true)}
      onClose={() => toggleDrawer(false)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      disableSwipeToOpen
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <span
          style={{
            marginTop: 13,
            width: 40,
            height: 3,
            background: "#5B5B5B",
            borderRadius: 5,
          }}
        />
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: 35,
          padding: "0 17px",
          paddingTop: 10,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
          borderRadius: 15,
        }}
      >
        <Camera />
        <p
          style={{
            fontWeight: 600,
            fontSize: 19,
            lineHeight: "23.16px",
            marginTop: 10,
          }}
        >
          Через камеру
        </p>
        <p
          style={{
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "20.4px",
            marginTop: 8,
          }}
        >
          Держите карту внутри рамки и она будет отсканирована
        </p>

        <NavLink to="/add-photo">
          <button
            className="btn btn-shadow"
            style={{ marginBottom: 24, marginTop: 12 }}
          >
            Добавить
          </button>
        </NavLink>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: 19,
          padding: "0 17px",
          paddingTop: 10,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
          borderRadius: 15,
        }}
      >
        <Dots />
        <p
          style={{
            fontWeight: 600,
            fontSize: 19,
            lineHeight: "23.16px",
            marginTop: 10,
          }}
        >
          Вручную
        </p>
        <p
          style={{
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "20.4px",
            marginTop: 8,
          }}
        >
          Заполнить данные карты вручную.
        </p>

        <NavLink to="/add-hande">
          <button
            style={{ marginBottom: 24, marginTop: 24 }}
            className="btn btn-shadow btn-outlined"
          >
            Добавить
          </button>
        </NavLink>
      </div>
    </SwipeableDrawer>
  );
};

export default BottomModal;
