import React from "react";
import { Container } from "./styles";
import { useQuery } from "@apollo/client";
import { Process } from "./components/Process";
import { PROCESS_LIST } from "../../../app/gql";

export function ProcessList() {
  const { data } = useQuery(PROCESS_LIST);

  return (
    <Container>
      {data?.processList.map((processData) => (
        <Process key={processData.id} processData={processData} />
      ))}
    </Container>
  );
}
