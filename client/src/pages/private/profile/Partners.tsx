import React, { useEffect, useContext } from "react";

import { BackArrow } from "../../../icons";
import { useHistory } from "react-router-dom";
import { BottomNavContext } from "../../../context/BottomNavContext";

const Partners: React.FC = () => {
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
        Партнерам
      </p>

      <p
        style={{
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "23.8px",
          marginTop: 4,
          color: "#5b5b5b",
        }}
      >
        Чтобы добавить свой магазин или внести изменения в существующий,
        обратитесь в нашу службу поддержки для корпоративных клиентов:
      </p>

      <div style={{ marginTop: 10, borderBottom: "1px solid #D5D5D5" }}>
        <p
          style={{
            fontWeight: 500,
            fontSize: 11,
            lineHeight: "11px",
            color: "#5b5b5b",
          }}
        >
          Телефон
        </p>
        <p
          style={{
            margin: "12px 0",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "11px",
            color: "#000000",
          }}
        >
          +7 999 888 77 66
        </p>
      </div>

      <div style={{ marginTop: 10, borderBottom: "1px solid #D5D5D5" }}>
        <p
          style={{
            fontWeight: 500,
            fontSize: 11,
            lineHeight: "11px",
            color: "#5b5b5b",
          }}
        >
          Эл. почта
        </p>
        <p
          style={{
            margin: "12px 0",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "11px",
            color: "#000000",
          }}
        >
          info@discards.ru
        </p>
      </div>
    </div>
  );
};

export default Partners;
