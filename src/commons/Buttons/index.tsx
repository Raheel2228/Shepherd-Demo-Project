import * as React from "react";
import { ButtonIcon, ButtonText, ButtonWrapper } from "./styles";

export interface IAppProps {
  children?: React.ReactNode;
  buttonIcon?: string;
}

export function MyButton(props: IAppProps) {
  return (
    <ButtonWrapper>
      <ButtonIcon src={props.buttonIcon} />
      <ButtonText>{props.children}</ButtonText>
    </ButtonWrapper>
  );
}
