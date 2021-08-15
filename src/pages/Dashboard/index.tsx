import * as React from "react";
import { HorizontalCard } from "../../commons/Cards/HorizontalCard";
import { LargeCard } from "../../commons/Cards/LargeCard";

import { SmallCard } from "../../commons/Cards/SmallCard";
import Page from "../../layout/Page";
import Vector from "../../assets/Vector.png";
import Vector1 from "../../assets/Vector (1).png";
import Vector2 from "../../assets/Vector (2).png";
import Vector3 from "../../assets/Vector (3).png";
import Vector4 from "../../assets/Vector (4).png";
import { CardTextArea } from "./styles";
export interface IAppProps {}

export function Dashboard(props: IAppProps) {
  return (
    <>
      <Page header="Dasboard">
        <SmallCard icon={Vector} areaName={"small1"} header={"Agenda"} />
        <SmallCard icon={Vector1} areaName={"small2"} header={"Personal Notes"}>
          <CardTextArea />
        </SmallCard>
        <SmallCard
          icon={Vector2}
          areaName={"small3"}
          header={"Action Points"}
        />

        <LargeCard icon={Vector3} header={"Action Points"} />
        <HorizontalCard icon={Vector4} header={"Action Points"} />
      </Page>
    </>
  );
}
