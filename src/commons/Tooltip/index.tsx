import * as React from "react";
import { ToolTipText, ToolTipWrapper } from "./styles";

export interface IAppProps {
  children: React.ReactNode;
  toolTipText: string;
}

export function ToolTip(props: IAppProps) {
  const { children, toolTipText } = props;
  return (
    <ToolTipWrapper>
      {children}
      <ToolTipText>{toolTipText}</ToolTipText>
    </ToolTipWrapper>
  );
}
