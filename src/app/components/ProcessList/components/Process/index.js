import React from "react";
import {
  Container,
  Title,
  Content,
  Link,
  Header,
  IconLink,
  GroupLink,
  Row,
  Column,
  Icon,
  Data,
  Text,
  Group,
  BlockData,
  TextLeft,
  Date,
} from "./styles";
import moment from "moment";
import localization from "moment/locale/ru";
import hook from "../../../../public/hook.svg";
import update from "../../../../public/update.svg";
import clock from "../../../../public/clock.svg";
import clock_two from "../../../../public/clock_two.svg";
import people from "../../../../public/people.svg";
import scenarios from "../../../../public/scenarios.svg";

export function Process({ processData }) {
  moment.locale("ru");
  const {
    name,
    numberOfExecutions,
    averageLeadTime,
    averageActiveTime,
    employeesInvolvedProcess,
    numberOfScenarios,
    start,
    end,
    loading,
  } = processData;

  const getProcent = (averageActiveTime / averageLeadTime) * 100;
  const formatedNumberOfExecutions = `${String(numberOfExecutions).slice(
    0,
    3
  )} ${String(numberOfExecutions).slice(3)}`;

  return (
    <Container>
      <Header>
        <Title>{name}</Title>
        <GroupLink>
          <Link>На карту процесса</Link>
          <IconLink src={hook} />
        </GroupLink>
      </Header>
      <Content>
        <Row>
          <Column>
            <BlockData>
              <Group>
                <Icon src={update} />
                <Data>{formatedNumberOfExecutions}</Data>
              </Group>
              <Text>выполнено раз</Text>
            </BlockData>
          </Column>
          <Column>
            <BlockData>
              <Group>
                <Icon src={clock} />
                <Data>
                  {moment.utc(averageLeadTime, "x").format("HH ч mm мин")}
                </Data>
              </Group>
              <Text>среднее время выполнения</Text>
            </BlockData>
            <BlockData>
              <Group>
                <Icon src={clock_two} />
                <Data>
                  {moment
                    .utc(averageActiveTime, "x")
                    .format(`HH ч mm мин (${+getProcent.toFixed(1)} %)`)}
                </Data>
              </Group>
              <Text>среднее активное время</Text>
            </BlockData>
          </Column>
          <Column>
            <BlockData>
              <Group>
                <Icon src={people} />
                <Data>{`${employeesInvolvedProcess} сотрудников`}</Data>
              </Group>
              <Text>участвует в процессе</Text>
            </BlockData>
            <BlockData>
              <Group>
                <Icon src={scenarios} />
                <Data>{`${numberOfScenarios} сценариев`}</Data>
              </Group>
              <Text>в процессе</Text>
            </BlockData>
          </Column>
          <Column>
            <BlockData>
              <Row>
                <TextLeft>Начало</TextLeft>
                <Date>{moment(start, "x").format("DD MMMM YYYY")}</Date>
              </Row>
            </BlockData>
            <BlockData>
              <Row>
                <TextLeft>Окончание</TextLeft>
                <Date>{moment(end, "x").format("DD MMMM YYYY")}</Date>
              </Row>
            </BlockData>
            <BlockData>
              <Row>
                <TextLeft>Загрузка</TextLeft>
                <Date>{moment(loading, "x").format("DD MMMM YYYY")}</Date>
              </Row>
            </BlockData>
          </Column>
        </Row>
      </Content>
    </Container>
  );
}
