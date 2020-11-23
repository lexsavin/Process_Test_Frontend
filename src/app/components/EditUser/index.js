import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "../InputText";
import { InputPassword } from "../InputPassword";
import { useMutation, useQuery } from "@apollo/client";
import { CURRENT_USER, EDIT_USER } from "../../gql";
import {
  Container,
  InputWrapper,
  Button,
  Title,
  FormGroup,
  TitleGroup,
  FieldName,
} from "./styles";

export function EditUser() {
  const [isToggleShowPassword, setIsToggleShowPassword] = useState(false);
  const [isToggleTextButton, setIsToggleTextButton] = useState(true);
  const [editUser] = useMutation(EDIT_USER);
  const { data, refetch } = useQuery(CURRENT_USER);

  const validateForm = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Поле должно быть заполнено";
    }
    if (!values.secondName) {
      errors.secondName = "Поле должно быть заполнено";
    }
    if (!values.email) {
      errors.email = "Поле должно быть заполнено";
    } else if (!values.email.includes("@")) {
      errors.email = "Введите корректный электронный адрес";
    }
    if (values.password && values.confirmPassword !== values.password) {
      errors.confirmPassword = "Пароли не совпадают";
    }
    return errors;
  };

  const handleTogglePassword = () =>
    setIsToggleShowPassword(!isToggleShowPassword);

  const handleToggleTextButton = () => {
    setIsToggleTextButton(false);
    setTimeout(() => setIsToggleTextButton(true), 3000);
  };

  const onSubmit = async ({ firstName, secondName, email, password }) => {
    await editUser({
      variables: {
        id: data?.currentUser?.id,
        firstName,
        secondName,
        email,
        password,
      },
    })
      .then(() => {
        handleToggleTextButton();
        refetch();
      })
      .catch((error) => {
        alert(String(error));
      });
  };

  const initialValues = {
    firstName: data?.currentUser?.firstName,
    secondName: data?.currentUser?.secondName,
    email: data?.currentUser?.email,
    password: null,
    confirmPassword: null,
  };
  return (
    <Container>
      <FormGroup>
        <Form
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form
              autoComplete="off"
              onSubmit={async (event) => {
                await handleSubmit(event);
                form.reset();
              }}
            >
              <TitleGroup>
                <Title>{`${data?.currentUser?.firstName} ${data?.currentUser?.secondName}. Редактирование`}</Title>
                <Button type="submit" disabled={submitting || pristine}>
                  {isToggleTextButton ? "Сохранить" : "Сохранено"}
                </Button>
              </TitleGroup>
              <InputWrapper>
                <FieldName>Имя</FieldName>
                <Field
                  name="firstName"
                  type="text"
                  component={InputText}
                  placeholder="Не задано"
                />
              </InputWrapper>
              <InputWrapper>
                <FieldName>Фамилия</FieldName>
                <Field
                  name="secondName"
                  type="text"
                  component={InputText}
                  placeholder="Не задано"
                />
              </InputWrapper>
              <InputWrapper>
                <FieldName>Электронная почта</FieldName>
                <Field
                  name="email"
                  type="text"
                  component={InputText}
                  placeholder="Не задано"
                />
              </InputWrapper>
              <InputWrapper>
                <FieldName>Новый пароль</FieldName>
                <Field
                  onToggleShowPassword={handleTogglePassword}
                  name="password"
                  type={isToggleShowPassword ? "text" : "password"}
                  component={InputPassword}
                  placeholder="Не задано"
                />
              </InputWrapper>
              <InputWrapper>
                <FieldName>Повторите пароль</FieldName>
                <Field
                  onToggleShowPassword={handleTogglePassword}
                  name="confirmPassword"
                  type={isToggleShowPassword ? "text" : "password"}
                  component={InputPassword}
                  placeholder="Не задано"
                />
              </InputWrapper>
            </form>
          )}
        />
      </FormGroup>
    </Container>
  );
}
