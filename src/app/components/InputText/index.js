import React from "react";
import { InputUI, Container, Span } from "./styles";

export function InputText({ onSetMessageError, input, meta, ...rest }) {
  return (
    <Container>
      <InputUI
        onInput={onSetMessageError ? () => onSetMessageError(null) : null}
        valid={meta.error && meta.touched}
        {...input}
        {...rest}
      />
      {meta.error && meta.touched && <Span>{meta.error}</Span>}
    </Container>
  );
}
