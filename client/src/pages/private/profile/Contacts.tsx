import React, { useContext, useEffect } from "react";

import { BackArrow } from "../../../icons";
import { useHistory } from "react-router-dom";
import { BottomNavContext } from "../../../context/BottomNavContext";

const Contacts: React.FC = () => {
  const history = useHistory();
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
          color: "#343434",
        }}
      >
        Контакты
      </p>

      <p
        style={{
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "23.8px",
          color: "#5b5b5b",
          marginTop: 4,
        }}
      >
        ООО “ДИСКАРДС”, 2020
      </p>
      <p
        style={{
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "23.8px",
          color: "#5b5b5b",
          marginTop: 4,
        }}
      >
        Россия, Санкт-Петербург, ул. Грушевского д.25 оф. 134
      </p>
      <p
        style={{
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "23.8px",
          color: "#5b5b5b",
          marginTop: 4,
        }}
      >
        partners@discards.com
      </p>
    </div>
  );
};

export default Contacts;
