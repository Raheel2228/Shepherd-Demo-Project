import * as React from "react";
import { SmallCardWrapper } from "./styles";

export interface IAppProps {
  areaName: string;
}

export function SmallCard(props: IAppProps) {
  return <SmallCardWrapper gridArea={props.areaName}></SmallCardWrapper>;
}
