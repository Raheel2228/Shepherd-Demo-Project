import * as React from "react";
import { CardHeader, CardIcon, CardDivider } from "../SmallCard/styles";
import { HorizontalCardWrapper } from "./styles";

export interface IAppProps {
  icon: string;
  header: string;
}

export function HorizontalCard(props: IAppProps) {
  const { icon, header } = props;
  return (
    <HorizontalCardWrapper>
      <CardIcon src={icon} />
      <CardHeader>{header}</CardHeader>
      <CardDivider />
    </HorizontalCardWrapper>
  );
}
