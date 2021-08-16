import styled from "styled-components";

export const ToolTipText = styled("span")({
  visibility: "hidden",
  width: "90px",
  backgroundColor: "#212429",
  color: "#fff",
  textAlign: "center",
  borderRadius: "6px",
  padding: "5px 15px",
  position: "absolute",
  zIndex: 1,
  fontSize: 8,
  lineHeight: "10px",
  fontWeight: "normal",
  bottom: "150%",
  left: "50%",
  marginLeft: "-60px",
  ":after": {
    content: '""',
    position: "absolute",
    top: "100%",
    left: "50%",
    marginLeft: "-5px",
    borderWidth: "5px",
    borderStyle: "solid",
    borderColor: "black transparent transparent transparent",
  },
});

export const ToolTipWrapper = styled("div")({
  marginLeft: 9,
  position: "relative",
  display: "inline-block",
  ":hover span": {
    visibility: "visible",
  },
});
