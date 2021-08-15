import * as React from "react";
import { CardDivider, CardHeader, CardIcon } from "../SmallCard/styles";
import { LargeCardWrapper } from "./styles";
export interface IAppProps {
  icon: string;
  header: string;
}

export function LargeCard(props: IAppProps) {
  return (
    <LargeCardWrapper>
      <CardIcon src={props.icon} />
      <CardHeader>{props.header}</CardHeader>
      <CardDivider />
    </LargeCardWrapper>
  );
}
