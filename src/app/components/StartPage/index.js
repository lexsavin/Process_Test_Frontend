import React, { useState } from "react";
import { Container, InputGroup, Logo } from "./styles";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import logo from "../../public/logo.svg";

export function StartPage({ history }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <Container>
      <Logo src={logo}></Logo>
      <InputGroup>
        {isOpen ? (
          <SignUp onOpen={handleOpen} />
        ) : (
          <SignIn history={history} onOpen={handleOpen} />
        )}
      </InputGroup>
    </Container>
  );
}
