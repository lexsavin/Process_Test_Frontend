import React from "react";
import { InputUI, ShowPassword, Container, Span } from "./styles";
import eyeInvisible from "../../public/eyeInvisible.svg";
import eyeVisible from "../../public/eyeVisible.svg";

export function InputPassword({
  onSetMessageError,
  onToggleShowPassword,
  input,
  meta,
  ...rest
}) {
  return (
    <Container>
      <InputUI
        onInput={onSetMessageError ? () => onSetMessageError(null) : null}
        valid={meta.error && meta.touched}
        {...input}
        {...rest}
      />
      <ShowPassword
        src={input.type === "password" ? eyeVisible : eyeInvisible}
        onClick={onToggleShowPassword}
      />
      {meta.error && meta.touched && <Span>{meta.error}</Span>}
    </Container>
  );
}
