import React, { useContext, useEffect } from "react";

import { BackArrow } from "../../../icons";
import { CssTextField } from "../../../components/MUI/CssComponents";
import { useHistory } from "react-router-dom";
import { BottomNavContext } from "../../../context/BottomNavContext";

const Support: React.FC = () => {
  const history = useHistory();
  const { setShowNav } = useContext(BottomNavContext);

  useEffect(() => {
    setShowNav(true);
  }, [setShowNav]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push("/success");
  };

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
        Поддержка
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
        Заполните форму ниже и мы ответим вам в ближайшее время:
      </p>

      <form onSubmit={handleSubmit}>
        <CssTextField
          variant="outlined"
          size="small"
          label="Эл. почта"
          fullWidth
          style={{ marginTop: 12 }}
        />
        <CssTextField
          variant="outlined"
          size="small"
          label="Имя"
          fullWidth
          style={{ marginTop: 11 }}
        />
        <CssTextField
          variant="outlined"
          size="small"
          label="Сообщение"
          multiline
          rows={5}
          fullWidth
          style={{ marginTop: 11 }}
        />

        <button type="submit" className="btn" style={{ marginTop: 11 }}>
          Отправить сообщение
        </button>
      </form>
    </div>
  );
};

export default Support;
