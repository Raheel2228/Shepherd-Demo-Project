import React, { FC } from "react";
import DashboardLayout from "./DashboardLayout";
import { PageHeader, PageWrapper } from "./styles";

interface Props {
  header?: React.ReactNode;
  children?: React.ReactNode;
}

const Page: FC<Props> = ({ header, children }) => {
  return (
    <DashboardLayout>
      <PageHeader>{header}</PageHeader>
      <PageWrapper>{children}</PageWrapper>
    </DashboardLayout>
  );
};

export default Page;
