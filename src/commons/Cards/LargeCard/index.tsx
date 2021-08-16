import * as React from "react";
import { CardDivider, CardHeader, CardIcon } from "../SmallCard/styles";
import { LargeCardWrapper } from "./styles";
export interface IAppProps {
  icon: string;
  header: string;
}

export function LargeCard(props: IAppProps) {
  const { icon, header } = props;
  return (
    <LargeCardWrapper>
      <CardIcon src={icon} />
      <CardHeader>{header}</CardHeader>
      <CardDivider />
    </LargeCardWrapper>
  );
}
