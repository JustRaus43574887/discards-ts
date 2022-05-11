import React, { useState, useEffect } from "react";

import Logo from "../../images/logo.svg";
import { CssTextField } from "../../components/MUI/CssComponents";
import { NavLink } from "react-router-dom";

import { useMutation } from "@apollo/react-hooks";
import LOGIN_MUTATION from "../../apollo/graphql/mutations/login";
import ME_QUERY from "../../apollo/graphql/queries/me";

import { useMessage } from "../../hooks/message.hook";

const Login: React.FC = () => {
  const message = useMessage();

  const [form, setForm] = useState<TForm>({ email: "", password: "" });

  const [login, { error, loading }] = useMutation(LOGIN_MUTATION, {
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
    if (error) message({ text: error.message, type: "error" });
  }, [error, message]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="center-wrapper">
      <div className="wrap">
        <img src={Logo} alt="logo" width={200} />
        <p className="subtitle">Войти</p>
        <form onSubmit={handleSubmit}>
          <CssTextField
            onChange={handleChange}
            value={form.email}
            name="email"
            size="small"
            label="Эл. почта"
            variant="outlined"
            fullWidth
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

          <button
            type="submit"
            disabled={loading}
            style={{ marginTop: 15 }}
            className="btn btn-shadow"
          >
            Войти
          </button>
        </form>

        <p className="bottom-link">
          Или <NavLink to="/registration">зарегистрируйтесь</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
