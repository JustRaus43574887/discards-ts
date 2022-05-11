import React, { useEffect, useContext } from "react";

import { BackArrow } from "../../../icons";
import { useHistory } from "react-router-dom";
import { BottomNavContext } from "../../../context/BottomNavContext";

const About: React.FC = () => {
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
        О приложении
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
        Приложение Discards разработано с целью облегчить пользование вами
        дисконтных карт, благодря нам
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
          Версия приложения
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
          1.0.1234
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
          Техническая поддержка
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

      <div style={{ marginTop: 10, borderBottom: "1px solid #D5D5D5" }}>
        <p
          style={{
            fontWeight: 500,
            fontSize: 11,
            lineHeight: "11px",
            color: "#5b5b5b",
          }}
        >
          Основной сайт
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
          DISCARDS.COM
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
          Юридическое лицо
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
          ООО “ДИСКАРДС”
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
          Разработчик
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
          webdobro.ru
        </p>
      </div>

      <div style={{ marginTop: 10, borderBottom: "1px solid #D5D5D5" }}>
        <p
          style={{
            margin: "12px 0",
            marginTop: 16,
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "11px",
            color: "#FF5151",
          }}
        >
          Политика конфиденциальности
        </p>
      </div>

      <div style={{ marginTop: 10, borderBottom: "1px solid #D5D5D5" }}>
        <p
          style={{
            margin: "12px 0",
            marginTop: 16,
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "11px",
            color: "#FF5151",
          }}
        >
          Пользовательское соглашение
        </p>
      </div>
    </div>
  );
};

export default About;
