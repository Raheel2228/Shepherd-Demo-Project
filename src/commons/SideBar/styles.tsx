import styled from "styled-components";

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 72px;
  height: calc(100vh);

  /* White */

  background: #ffffff;
  box-shadow: 0px 4px 4px #d3d3d3;
`;
export const SideBarLogo = styled.img`
  width: 52px;
  height: 52px;
  margin: 10px;

  /* Purple */

  background: #1b1464;
  border-radius: 18px;
`;

export const SideBarDivider = styled.hr`
  width: 40px;
  height: 0px;

  border: 2px solid #e9e9eb;
`;

export const SideBarAvatar = styled.img`
  vertical-align: middle;
  width: 40px;
  margin-inline: auto;
  height: 40px;
  position: absolute;
  border-radius: 50%;
  bottom: 30px;
  left: 12px;
  border: 4px solid #2ce3a0;
`;
