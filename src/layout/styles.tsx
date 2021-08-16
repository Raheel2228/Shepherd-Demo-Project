import styled, { keyframes } from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ContentArea = styled.main`
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: flex-start;
  //   flex-grow: 1;
`;

export const PageWrapper = styled.section`
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: flex-start;
  //   flex-grow: 1;
  display: grid;
  margin-left: 24px;
  grid-gap: 24px;
  grid-template-areas: "small1 small2 small3 right";
  // "footer footer footer right";
  grid-auto-columns: max-content;
`;

export const PageHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-left: 24px;
  margin-block: 27px;
  height: 34px;

  /* H1 */

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  /* identical to box height */

  /* Light Black */

  color: #272727;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
`;
