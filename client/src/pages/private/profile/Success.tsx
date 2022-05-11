import React, { useContext, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { SuccessRound } from "../../../icons";
import { BottomNavContext } from "../../../context/BottomNavContext";

const SuccessSend: React.FC = () => {
  const { setShowNav } = useContext(BottomNavContext);

  useEffect(() => {
    setShowNav(false);
  }, [setShowNav]);

  return (
    <div className="center-wrapper">
      <div className="wrap">
        <SuccessRound />
        <p
          style={{
            fontWeight: 600,
            fontSize: 19,
            lineHeight: "23.16px",
            color: "#000000",
            marginTop: 20,
          }}
        >
          Ваше сообщение отправлено!
        </p>
        <p
          style={{
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "23.8px",
            marginTop: 7,
          }}
        >
          В ближайшее время мы с вами свяжемся
        </p>

        <NavLink to="/">
          <button style={{ marginTop: 20 }} className="btn">
            Вернуться назад
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SuccessSend;
