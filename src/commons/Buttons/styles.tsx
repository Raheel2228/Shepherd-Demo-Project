import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  margin-inline: 44px;
  margin-top: 16px;
  width: 198px;
  height: 44px;

  background: #ffffff;
  /* Button Outline Grey */

  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const ButtonText = styled.div`
  /* H2 */

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height, or 121% */

  /* Light Black (60%) */

  color: rgba(39, 39, 39, 0.6);

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 16px;
`;
export const ButtonIcon = styled.img``;
