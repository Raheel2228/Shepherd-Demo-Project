import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ContentArea = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
`;

export const PageWrapper = styled.section`
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: flex-start;
  //   flex-grow: 1;
  display: grid;
  grid-template-areas:
    "small1 small2 small3 right"
    "footer footer footer right";
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
