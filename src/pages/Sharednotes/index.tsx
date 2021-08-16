import * as React from "react";
import Page from "../../layout/Page";

export interface IAppProps {}

export default function SharedNotes(props: IAppProps) {
  return (
    <>
      <Page header={"Shared Notes"}></Page>
    </>
  );
}
