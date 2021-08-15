import * as React from "react";
import { CardDivider, CardHeader, CardIcon, SmallCardWrapper } from "./styles";

export interface IAppProps {
  areaName: string;
  icon: string;
  header: string;
  children?: React.ReactNode;
}

export function SmallCard(props: IAppProps) {
  return (
    <SmallCardWrapper gridArea={props.areaName}>
      <CardIcon src={props.icon} />
      <CardHeader>{props.header}</CardHeader>
      <CardDivider />
      {props.children}
    </SmallCardWrapper>
  );
}
