import React, { FC } from "react";
import { SideBar } from "../commons/SideBar";

import { ContentArea, MainWrapper } from "./styles";
interface Props {
  children: React.ReactNode;
}
const Dashboard: FC<Props> = ({ children }) => {
  return (
    <MainWrapper>
      <SideBar />
      <ContentArea>{children}</ContentArea>
    </MainWrapper>
  );
};

export default Dashboard;
