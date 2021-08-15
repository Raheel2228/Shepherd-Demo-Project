import React, { FC } from "react";
import Dashboard from "./Dashboard";
import { PageHeader, PageWrapper } from "./styles";

interface Props {
  header?: string;
  children: React.ReactNode;
}

const Page: FC<Props> = ({ header, children }) => {
  return (
    <Dashboard>
      <PageHeader>{header}</PageHeader>
      <PageWrapper>{children}</PageWrapper>
    </Dashboard>
  );
};

export default Page;
