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
  const { areaName, icon, header, children, heightTrigger } = props;
  return (
    <SmallCardWrapper changeHeight={heightTrigger} gridArea={areaName}>
      <CardIcon src={icon} />
      <CardHeader>{header}</CardHeader>
      {heightTrigger && (
        <>
          <CardDivider />
          {children}
        </>
      )}
    </SmallCardWrapper>
  );
}
