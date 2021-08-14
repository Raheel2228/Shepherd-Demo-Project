import * as React from "react";
import { SideBarDivider, SideBarLogo, SideBarWrapper } from "./styles";
import Logo from "../../assets/icon.png";
export interface IAppProps {}

export function SideBar(props: IAppProps) {
  return (
    <SideBarWrapper>
      <SideBarLogo src={Logo} />
      <SideBarDivider />
    </SideBarWrapper>
  );
}
