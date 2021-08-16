import * as React from "react";
import {
  BottomDivider,
  MyNavLink,
  NavIcon,
  NavIconWrapper,
  SideBarAvatar,
  SideBarDivider,
  SideBarLogo,
  SideBarWrapper,
} from "./styles";
import Logo from "../../assets/icon.svg";
import Vector from "../../assets/Vector.svg";
import Vector1 from "../../assets/Vector (9).svg";
export interface IAppProps {}

export function SideBar(props: IAppProps) {
  return (
    <SideBarWrapper>
      <SideBarLogo src={Logo} />
      <SideBarDivider />
      <MyNavLink to="/home">
        <NavIconWrapper>
          <NavIcon src={Vector}></NavIcon>
        </NavIconWrapper>
      </MyNavLink>
      <MyNavLink to="/shared_notes">
        <NavIconWrapper>
          <NavIcon src={Vector1}></NavIcon>
        </NavIconWrapper>
      </MyNavLink>

      <BottomDivider />

      <SideBarAvatar src={`${localStorage.getItem("photoUrl")}`} />
    </SideBarWrapper>
  );
}
