import * as React from "react";
import { ButtonIcon, ButtonText, ButtonWrapper } from "./styles";

export interface IAppProps {
  children?: React.ReactNode;
  onClick?: Function;
  buttonIcon?: Array<string>;
}

export function MyButton(props: IAppProps) {
  const { onClick, buttonIcon, children } = props;
  const [buttonHover, setButtonHover] = React.useState(false);
  return (
    <ButtonWrapper
      onClick={() => onClick && onClick()}
      onMouseEnter={() => {
        setButtonHover(true);
      }}
      onMouseLeave={() => {
        setButtonHover(false);
      }}
    >
      <ButtonIcon
        src={buttonIcon && (buttonHover ? buttonIcon[1] : buttonIcon[0])}
      />
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
}
