import React, { useEffect, useState } from "react";

import { Back } from "../../icons";
import Logo from "../../images/logo.svg";
import { CssTextField } from "../../components/MUI/CssComponents";
import { NavLink, useHistory } from "react-router-dom";

import { useMutation } from "@apollo/react-hooks";
import REG_MUTATION from "../../apollo/graphql/mutations/registration";
import LOGIN_MUTATION from "../../apollo/graphql/mutations/login";
import ME_QUERY from "../../apollo/graphql/queries/me";

import { useMessage } from "../../hooks/message.hook";

const Registration: React.FC = () => {
  const history = useHistory();
  const message = useMessage();

  const [form, setForm] = useState<TForm>({
    name: "",
    email: "",
    password: "",
    password_repeat: "",
  });

  const [registrate, { data, error, loading }] = useMutation(REG_MUTATION, {
    variables: {
      ...form,
    },
  });

  const [login, result] = useMutation(LOGIN_MUTATION, {
    variables: { ...form },
    update: (cache, { data }) => {
      const { token, user } = data.login || {};
      localStorage.setItem("token", token);
      cache.writeQuery({
        query: ME_QUERY,
        data: { me: user },
      });
    },
  });

  useEffect(() => {
    if (data && data.registration) {
      message({ text: data.registration, type: "success" });
      login();
      history.push("/");
    }
  }, [data, message, login, history]);

  useEffect(() => {
    if (error) message({ text: error.message, type: "error" });
    if (result.error) message({ text: result.error.message, type: "error" });
  }, [error, result.error, message]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.password !== form.password_repeat)
      return message({ text: "Пароли не совпадают!", type: "error" });
    registrate();
  };

  return (
    <>
      <div
        style={{ marginLeft: 20, marginTop: 20 }}
        onClick={() => history.goBack()}
      >
        <Back />
      </div>
      <div className="center-wrapper">
        <div className="wrap">
          <img src={Logo} alt="logo" width={200} />
          <p className="subtitle">Регистрация</p>
          <form onSubmit={handleSubmit}>
            <CssTextField
              onChange={handleChange}
              value={form.name}
              name="name"
              size="small"
              label="Ваше имя"
              variant="outlined"
              fullWidth
            />
            <CssTextField
              onChange={handleChange}
              value={form.email}
              name="email"
              size="small"
              label="Эл. почта"
              variant="outlined"
              fullWidth
              style={{ marginTop: 11 }}
            />
            <CssTextField
              onChange={handleChange}
              value={form.password}
              name="password"
              size="small"
              label="Пароль"
              variant="outlined"
              type="password"
              fullWidth
              style={{ marginTop: 11 }}
            />
            <CssTextField
              onChange={handleChange}
              value={form.password_repeat}
              name="password_repeat"
              size="small"
              label="Пароль ещё раз"
              variant="outlined"
              type="password"
              fullWidth
              style={{ marginTop: 11 }}
            />

            <button
              disabled={loading || result.loading}
              type="submit"
              className="btn btn-shadow"
              style={{ marginTop: 15 }}
            >
              Зарегистрироваться
            </button>
          </form>

          <p className="bottom-link">
            Нажимая кнопку “Зарегистрироваться” я даю согласие на обработку
            персональных данных, а так же соглашаюсь с{" "}
            <NavLink to="/policy"> политикой конфиденциальности</NavLink>{" "}
            приложения DISCARDS
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;
