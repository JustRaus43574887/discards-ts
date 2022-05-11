import React, { useEffect, useContext, useState } from "react";

import { BottomNavContext } from "../../../context/BottomNavContext";
import SearchInput from "../../../components/SearchInput";
import BottomModal from "../../../components/pages/main/BottomModal";
import { Add, Plus } from "../../../icons";

const Main: React.FC = () => {
  const [drawerState, setDrawerState] = useState<boolean>(false);
  const toggleDrawer = (state: boolean) => setDrawerState(state);

  const { setShowNav } = useContext(BottomNavContext);

  useEffect(() => {
    setShowNav(true);
  }, [setShowNav]);

  return (
    <div
      style={{
        padding: 20,
        marginBottom: 70,
        position: "absolute",
        height: "auto",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <SearchInput />
        <p
          style={{
            marginTop: 16,
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          Для начала, добавьте вашу первую карту:
        </p>
      </div>

      <div
        onClick={() => toggleDrawer(true)}
        style={{
          marginTop: 32,
          height: "100%",
          width: "70%",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
          borderRadius: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Plus />
      </div>

      <div
        onClick={() => toggleDrawer(true)}
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="btn-circle"
          style={{
            width: 45,
            height: 45,
            backgroundColor: "#FF5151",
            marginRight: 10,
          }}
        >
          <Add />
        </button>
        <p
          style={{
            fontWeight: 600,
            fontSize: 15,
            lineHeight: "18.29px",
            color: "#FF5151",
          }}
        >
          Добавить
        </p>
      </div>
      <BottomModal drawerState={drawerState} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Main;
