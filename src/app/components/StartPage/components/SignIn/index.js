import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "../../../InputText";
import { InputPassword } from "../../../InputPassword";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../../../gql";
import {
  Container,
  InputWrapper,
  Button,
  Link,
  WarningError,
  Message,
} from "./styles";
import { getToken, setToken } from "../../../../utils";

export function SignIn({ onOpen, history }) {
  const [isToggleShowPassword, setIsToggleShowPassword] = useState(false);
  const [messageError, setMessageError] = useState(null);
  const [signInUser] = useMutation(LOGIN);
  if (getToken()) {
    history.push("/edituser");
    return null;
  }
  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Поле должно быть заполнено";
    }
    if (!values.password) {
      errors.password = "Поле должно быть заполнено";
    }
    return errors;
  };

  const handleTogglePassword = () =>
    setIsToggleShowPassword(!isToggleShowPassword);

  const handleSetMessageError = (value) => setMessageError(value);

  const onSubmit = async ({ email, password }) => {
    await signInUser({
      variables: {
        email,
        password,
      },
    })
      .then(({ data: { login } }) => {
        setToken(login.token);
        history.push("/edituser");
      })
      .catch((error) => handleSetMessageError(String(error)));
  };

  return (
    <>
      <Container>
        <Form
          validate={validateForm}
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting, pristine }) => (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <InputWrapper>
                <Field
                  onSetMessageError={handleSetMessageError}
                  name="email"
                  type="text"
                  placeholder="Электронная почта"
                  component={InputText}
                />
              </InputWrapper>
              <InputWrapper>
                <Field
                  onSetMessageError={handleSetMessageError}
                  onToggleShowPassword={handleTogglePassword}
                  name="password"
                  type={isToggleShowPassword ? "text" : "password"}
                  component={InputPassword}
                  placeholder="Пароль"
                />
              </InputWrapper>
              <Button type="submit" disabled={submitting || pristine}>
                Войти в систему
              </Button>
              <Link onClick={onOpen}>Зарегистрироваться</Link>
            </form>
          )}
        />
      </Container>
      {messageError ? (
        <WarningError>
          <Message>{messageError}</Message>
        </WarningError>
      ) : null}
    </>
  );
}
