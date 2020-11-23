import React from "react";
import {
  Icon,
  Container,
  HeaderMenu,
  LeftBlock,
  RightBlock,
  TextMenu,
  Category,
} from "./styles";
import logoMenuWhite from "../../../../public/logoMenuWhite.svg";
import userNameIcon from "../../../../public/userNameIcon.svg";
import processList from "../../../../public/processList.svg";

export function Menu({ onCloseMenu, historyRouter }) {
  const handleEditUserRouter = () => historyRouter.push("/edituser");
  const handleListProcessRouter = () => historyRouter.push("/processlist");
  return (
    <Container>
      <LeftBlock>
        <HeaderMenu>
          <Icon onClick={onCloseMenu} src={logoMenuWhite} />
          <TextMenu>proceset</TextMenu>
        </HeaderMenu>
        <Category onClick={handleEditUserRouter}>
          <Icon src={userNameIcon} />
          <TextMenu>Профиль пользователя</TextMenu>
        </Category>
        <Category onClick={handleListProcessRouter}>
          <Icon src={processList} />
          <TextMenu>Список процессов</TextMenu>
        </Category>
      </LeftBlock>
      <RightBlock onClick={onCloseMenu} />
    </Container>
  );
}
