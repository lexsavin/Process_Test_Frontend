import React, { useState } from "react";
import { Container, Header, Icon, Text, Group } from "./styles";
import logoMenu from "../../public/logoMenu.svg";
import { Menu } from "./components/Menu";
import { removeToken } from "../../utils";
import { useQuery } from "@apollo/client";
import { CURRENT_USER } from "../../gql";

export function LayoutWrapper(Component) {
  const Layout = ({ history }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const { loading, error } = useQuery(CURRENT_USER);

    if (loading) return "Loading...";
    if (error) return `${String(error)}!`;

    const handleOpenMenu = () => setIsOpenMenu(true);

    const handleCloseMenu = () => setIsOpenMenu(false);

    const handleCloseUser = () => {
      removeToken();
      history.push("/");
    };
    return (
      <Container>
        <Header>
          <Group>
            <Icon onClick={handleOpenMenu} src={logoMenu} />
            <Text>Меню</Text>
          </Group>
          <Text onClick={handleCloseUser}>Выход</Text>
        </Header>
        <Component />
        {isOpenMenu ? (
          <Menu historyRouter={history} onCloseMenu={handleCloseMenu} />
        ) : null}
      </Container>
    );
  };
  return Layout;
}
