import React, { useContext, useEffect } from "react";

import { BottomNavContext } from "../../context/BottomNavContext";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg";

const NotFound: React.FC = () => {
  const { setShowNav } = useContext(BottomNavContext);

  useEffect(() => {
    setShowNav(false);
  }, [setShowNav]);

  return (
    <div className="center-wrapper">
      <div className="wrap">
        <img src={Logo} alt="logo" width={200} />

        <p
          style={{
            fontWeight: 700,
            fontSize: 24,
            lineHeight: "29.26px",
            color: "#5b5b5b",
          }}
        >
          Ошибка
        </p>

        <p
          style={{
            fontWeight: 700,
            fontSize: 80,
            lineHeight: "97.52px",
            color: "#5b5b5b",
            marginTop: 5,
          }}
        >
          404
        </p>

        <p
          style={{
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "23.8px",
            color: "#5b5b5b",
          }}
        >
          Что-то пошло не так, данная страница не найдена!
        </p>

        <NavLink to="/">
          <button className="btn" style={{ marginTop: 28 }}>
            Вернуться на главную
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
