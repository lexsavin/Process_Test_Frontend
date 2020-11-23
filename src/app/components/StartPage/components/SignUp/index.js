import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "../../../InputText";
import { InputPassword } from "../../../InputPassword";
import { useMutation } from "@apollo/client";
import {
  Container,
  InputWrapper,
  Button,
  Link,
  WarningError,
  Message,
  Title,
  Span,
} from "./styles";
import { SIGN_UP } from "../../../../gql";

export function SignUp({ onOpen, history }) {
  const [isToggleShowPassword, setIsToggleShowPassword] = useState(false);
  const [messageError, setMessageError] = useState(null);
  const [signUpUser] = useMutation(SIGN_UP);

  const validateForm = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Поле должно быть заполнено";
    }
    if (!values.secondName) {
      errors.secondName = "Поле должно быть заполнено";
    }
    if (!values.password) {
      errors.password = "Поле должно быть заполнено";
    }
    if (!values.email) {
      errors.email = "Поле должно быть заполнено";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Поле должно быть заполнено";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Пароли не совпадают";
    }
    return errors;
  };

  const handleTogglePassword = () =>
    setIsToggleShowPassword(!isToggleShowPassword);

  const handleSetMessageError = (value) => setMessageError(value);

  const onSubmit = async ({ firstName, secondName, email, password }) => {
    await signUpUser({
      variables: {
        firstName,
        secondName,
        email,
        password,
      },
    })
      .then(() => {
        onOpen();
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
              <Title>Регистрация</Title>
              <InputWrapper>
                <Field
                  onSetMessageError={handleSetMessageError}
                  name="firstName"
                  type="text"
                  component={InputText}
                  placeholder="Имя"
                />
              </InputWrapper>
              <InputWrapper>
                <Field
                  onSetMessageError={handleSetMessageError}
                  name="secondName"
                  type="text"
                  component={InputText}
                  placeholder="Фамилия"
                />
              </InputWrapper>
              <InputWrapper>
                <Field
                  onSetMessageError={handleSetMessageError}
                  name="email"
                  type="text"
                  component={InputText}
                  placeholder="Электронная почта"
                />
              </InputWrapper>
              <InputWrapper>
                <Field
                  onSetMessageError={handleSetMessageError}
                  onToggleShowPassword={handleTogglePassword}
                  name="password"
                  type={isToggleShowPassword ? "text" : "password"}
                  component={InputPassword}
                  placeholder="Введите пароль"
                />
              </InputWrapper>
              <InputWrapper>
                <Field
                  onSetMessageError={handleSetMessageError}
                  onToggleShowPassword={handleTogglePassword}
                  name="confirmPassword"
                  type={isToggleShowPassword ? "text" : "password"}
                  component={InputPassword}
                  placeholder="Повторите пароль"
                />
              </InputWrapper>
              <Button type="submit" disabled={submitting || pristine}>
                Регистрация
              </Button>
              <Link>
                Уже зарегистрированы? <Span onClick={onOpen}>Вход</Span>
              </Link>
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
