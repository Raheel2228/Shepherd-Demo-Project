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
  font-weight: 600;
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
  margin-left: 145px;
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

  position: absolute;
  right: 10px;
  &:hover {
    background: #1b1464;
    color: white;
  }
`;

export const CardCheckBoxWrapper = styled.div`
  margin-left: 24px;
  margin-top: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 10px;
  /* identical to box height */

  /* Light Black */
  // height: 54.8%;
  height: 180px;
  overflow: auto;
  color: #272727;
`;
export const CardCheckBox = styled.input.attrs({ type: "checkbox" })`
  margin-bottom: 16px;
  margin-right: 14px;
`;
export const CheckBoxBody = styled.div`
  width: 100%;
`;
