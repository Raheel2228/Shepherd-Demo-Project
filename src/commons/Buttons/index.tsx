import * as React from "react";
import { ButtonIcon, ButtonText, ButtonWrapper } from "./styles";

export interface IAppProps {
  children?: React.ReactNode;
  onClick?: Function;
  buttonIcon?: Array<string>;
}

export function MyButton(props: IAppProps) {
  const [buttonHover, setButtonHover] = React.useState(false);
  return (
    <ButtonWrapper
      onClick={() => props.onClick && props.onClick()}
      onMouseEnter={() => {
        setButtonHover(true);
      }}
      onMouseLeave={() => {
        setButtonHover(false);
      }}
    >
      <ButtonIcon
        src={
          props.buttonIcon &&
          (buttonHover ? props.buttonIcon[1] : props.buttonIcon[0])
        }
      />
      <ButtonText>{props.children}</ButtonText>
    </ButtonWrapper>
  );
}
