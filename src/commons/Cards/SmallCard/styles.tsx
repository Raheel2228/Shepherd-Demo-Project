import styled from "styled-components";

export const SmallCardWrapper = styled.div<{
  gridArea: string;
  changeHeight?: boolean;
}>`
  width: 293px;
  height: ${(props) => (props.changeHeight ? "auto" : "fit-content")};
  padding-bottom: ${(props) => (props.changeHeight ? "0px" : "7px")};
  /* White */
  grid-area: ${(props) => props.gridArea};
  background: #ffffff;
  /* Grey */
  transition: 1s;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px #ebebeb;
  border-radius: 10px;
`;
export const CardIcon = styled.img`
  margin: 14px 15px 0px 15px;
`;
export const CardHeader = styled.span`
  height: 15px;
  margin-top: 16px;
  position: absolute;
  /* H2 */

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height, or 121% */

  /* Light Black */

  color: #272727;
`;
export const CardDivider = styled.hr`
  width: 100%;
  height: 0px;
  margin: 5px 0px 0px 0px;
  background: #eaeaea;
  /* Grey */

  border: 1px solid #eaeaea;
`;
