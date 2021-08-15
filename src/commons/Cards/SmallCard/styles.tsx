import styled from "styled-components";

export const SmallCardWrapper = styled.div<{ gridArea: string }>`
  margin-left: 24px;
  width: 293px;
  height: 346px;

  /* White */
  grid-area: ${(props) => props.gridArea};
  background: #ffffff;
  /* Grey */

  border: 1px solid #eaeaea;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px #ebebeb;
  border-radius: 10px;
`;
