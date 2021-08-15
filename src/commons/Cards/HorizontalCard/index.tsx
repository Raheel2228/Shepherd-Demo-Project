import * as React from "react";
import { CardHeader, CardIcon, CardDivider } from "../SmallCard/styles";
import { HorizontalCardWrapper } from "./styles";

export interface IAppProps {
  icon: string;
  header: string;
}

export function HorizontalCard(props: IAppProps) {
  return (
    <HorizontalCardWrapper>
      <CardIcon src={props.icon} />
      <CardHeader>{props.header}</CardHeader>
      <CardDivider />
    </HorizontalCardWrapper>
  );
}
