import React from "react";
import "./App.css";
import { HorizontalCard } from "./commons/Cards/HorizontalCard";
import { LargeCard } from "./commons/Cards/LargeCard";

import { SmallCard } from "./commons/Cards/SmallCard";
import Page from "./layout/Page";

function App() {
  return (
    <>
      <Page header="Dasboard">
        <SmallCard areaName={"small1"} />
        <SmallCard areaName={"small2"} />
        <SmallCard areaName={"small3"} />

        <LargeCard />
        <HorizontalCard />
      </Page>
    </>
  );
}

export default App;
