import styled from "styled-components";

export const CardTextArea = styled.textarea`
  width: 239px;
  height: 176px;
  resize: none;
  background: #f9f9f9;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 24px;
  margin-inline: 27px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 10px;
  outline: none;
  padding: 16px;
`;
export const CardTextAreaFoot = styled.div`
  width: 207px;
  height: 10px;

  margin-inline: 43px;
  /* Paragraph */

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 10px;
  padding-top: 8px;
  /* identical to box height */

  text-align: center;

  color: #d85988;
`;

export const CardHeaderDropIcon = styled.img<{
  flip: boolean;
}>`
  margin-left: 162px;
  cursor: pointer;
  -webkit-transform: ${(props) => (props.flip ? "" : "scaleY(-1)")};
  transform: ${(props) => (props.flip ? "" : "scaleY(-1)")};
  transition: 1s;
`;
export const SignOutButton = styled.button`
  background-color: white;
  border: none;
  color: black;
  padding: 5px 20px;
  text-align: center;
  font-size: 14px;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
  font-weight: 700;
  margin-left: auto;
  &:hover {
    background: rgba(234, 234, 234, 0.4);
  }
`;
