import * as React from "react";
import { CardDivider, CardHeader, CardIcon, SmallCardWrapper } from "./styles";

export interface IAppProps {
  areaName: string;
  icon: string;
  header: React.ReactNode;
  children?: React.ReactNode;
  heightTrigger?: boolean;
}

export function SmallCard(props: IAppProps) {
  return (
    <SmallCardWrapper
      changeHeight={props.heightTrigger}
      gridArea={props.areaName}
    >
      <CardIcon src={props.icon} />
      <CardHeader>{props.header}</CardHeader>
      {props.heightTrigger && (
        <>
          <CardDivider />
          {props.children}
        </>
      )}
    </SmallCardWrapper>
  );
}
