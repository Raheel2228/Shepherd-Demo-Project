import * as React from "react";
import { HorizontalCard } from "../../commons/Cards/HorizontalCard";
import { LargeCard } from "../../commons/Cards/LargeCard";

import { SmallCard } from "../../commons/Cards/SmallCard";
import Page from "../../layout/Page";
import Vector from "../../assets/Vector.svg";
import Vector1 from "../../assets/Vector (1).svg";
import Vector2 from "../../assets/Vector (2).svg";
import Vector3 from "../../assets/Vector (3).svg";
import Vector4 from "../../assets/Vector (4).svg";
import Vector5 from "../../assets/Vector (5).svg";
import Vector6 from "../../assets/Vector (6).svg";
import Vector7 from "../../assets/Vector (7).svg";
import {
  CardHeaderDropIcon,
  CardTextArea,
  CardTextAreaFoot,
  SignOutButton,
} from "./styles";
import { MyButton } from "../../commons/Buttons";
export interface IAppProps {
  myLocation?: string;
  signOut: Function;
  myNotes: Array<{ note_text: string }>;
}

export function Dashboard(props: IAppProps) {
  const [accordian, setAccordian] = React.useState(true);
  return (
    <>
      <Page
        header={
          <>
            Dasboard
            <SignOutButton onClick={() => props.signOut()}>
              Sign Out
            </SignOutButton>
          </>
        }
      >
        <SmallCard
          icon={Vector}
          heightTrigger={accordian}
          areaName={"small1"}
          header={
            <>
              Agenda
              <CardHeaderDropIcon
                onClick={() => {
                  setAccordian(!accordian);
                }}
                flip={accordian}
                src={Vector7}
              />
            </>
          }
        >
          {" "}
          <MyButton buttonIcon={[Vector5, Vector6]}>Add Checkbox</MyButton>
        </SmallCard>
        <SmallCard
          icon={Vector1}
          heightTrigger={true}
          areaName={"small2"}
          header={"Personal Notes"}
        >
          <CardTextArea defaultValue={props.myNotes[0].note_text} />

          <MyButton buttonIcon={[Vector5, Vector6]}>Check Hover State</MyButton>
        </SmallCard>
        <SmallCard
          heightTrigger={true}
          icon={Vector2}
          areaName={"small3"}
          header={"Your Location"}
        >
          <CardTextArea disabled value={props.myLocation} />
          {/* <CardTextAreaFoot>Max 500 characters</CardTextAreaFoot> */}
          {/* <MyButton buttonIcon={[Vector5, Vector6]}>
            Fixed Width Button
          </MyButton> */}
        </SmallCard>

        {/* <LargeCard icon={Vector3} header={"Action Points"} />
        <HorizontalCard icon={Vector4} header={"Action Points"} /> */}
      </Page>
    </>
  );
}
