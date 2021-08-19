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
import Vector8 from "../../assets/Vector (8).svg";
import {
  CardCheckBox,
  CardCheckBoxWrapper,
  CardHeaderDropIcon,
  CardTextArea,
  CardTextAreaFoot,
  CheckBoxBody,
  SignOutButton,
} from "./styles";
import { MyButton } from "../../commons/Buttons";
import { ToolTip } from "../../commons/Tooltip";
import { Spinner } from "../../layout/styles";
declare type $Unknown = any;
export interface IAppProps {
  fireBaseRef: $Unknown;
  user: $Unknown;
  myLocation?: string;
  signOut: Function;
}

export default function Dashboard(props: IAppProps) {
  const { fireBaseRef, user, myLocation, signOut } = props;
  const [myNotes, setMyNotes] = React.useState<
    Array<{ id: string; user_id: string; note_text: string }>
  >([]);
  const [notesLoading, setNotesLoading] = React.useState(false);
  const [notesAdding, setNotesAdding] = React.useState(false);
  React.useEffect(() => {
    if (user) {
      const { uid, photoURL } = user;
      localStorage.setItem("photoUrl", photoURL);
      //getting notes from firebase when logged in or refreshed
      fireBaseRef
        .where("user_id", "==", uid)
        .get()
        .then((snapshot: { docs: Array<any> }) => {
          let userNote = snapshot.docs.map((doc: $Unknown) => {
            doc.data().id = doc.id;
            let obj = doc.data();
            obj.id = doc.id;
            return obj;
          });
          setMyNotes(userNote);
          setNotesAdding(false);
          setNotesLoading(true);
        });
    }
  }, [user]);

  //creating the new initial note
  const createNotesFirstTime = (textToSend: string) => {
    if (user && !notesAdding) {
      setNotesAdding(true);
      const { uid } = user;
      fireBaseRef
        .add({
          note_text: textToSend,
          user_id: uid,
        })
        .then(function (docRef: $Unknown) {
          debugger;
          setMyNotes([
            {
              user_id: uid,
              note_text: textToSend,
              id: docRef.id,
            },
          ]);
          console.log("Tutorial created with ID: ", docRef.id);
        })
        .catch(function (error: Error) {
          console.error("Error adding notes", error);
        });
    }
  };
  // accordian open/close state
  const [accordian, setAccordian] = React.useState(true);
  //number of checkboxes added
  const [checkboxCount, setCheckboxCount] = React.useState(3);
  let checkboxes = [];
  for (let i = 0; i < checkboxCount; i++) {
    checkboxes.push(
      <CheckBoxBody>
        <CardCheckBox key={i} type="checkbox" />
        Task {i + 1}
      </CheckBoxBody>
    );
  }
  return (
    <>
      {/* wait for notes to come and show spinning */}
      {notesLoading ? (
        <Page
          header={
            <>
              Dasboard
              <SignOutButton onClick={() => signOut()}>Sign Out</SignOutButton>
            </>
          }
        >
          {/* agenda card */}
          <SmallCard
            icon={Vector}
            heightTrigger={accordian}
            areaName={"small1"}
            header={
              <>
                Agenda
                <ToolTip toolTipText="Please add your notes in the Personal Notes Box and they will be saved automatically. You can also add checkboxes below using the add button.">
                  <img src={Vector8} />
                </ToolTip>
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
            <CardCheckBoxWrapper>{checkboxes}</CardCheckBoxWrapper>
            <MyButton
              onClick={() => {
                checkboxCount;
                setCheckboxCount(checkboxCount + 1);
              }}
              buttonIcon={[Vector5, Vector6]}
            >
              Add Checkbox
            </MyButton>
          </SmallCard>
          {/* personal notes card */}
          <SmallCard
            icon={Vector1}
            heightTrigger={true}
            areaName={"small2"}
            header={"Personal Notes"}
          >
            <CardTextArea
              maxLength={500}
              //listening o the change in the notes text area
              onChange={(e) => {
                //see if the user has created notes already or not
                if (myNotes[0]?.id) {
                  fireBaseRef.doc(myNotes[0].id).set({
                    note_text: e.target.value,
                    user_id: myNotes[0].user_id,
                  });
                } else {
                  //if not so we create an initial note againt the uid of the user
                  createNotesFirstTime(e.target.value);
                }
              }}
              defaultValue={myNotes[0]?.note_text}
            />
            <CardTextAreaFoot>Max 500 characters</CardTextAreaFoot>

            <MyButton buttonIcon={[Vector5, Vector6]}>
              Check Hover State
            </MyButton>
          </SmallCard>
          {/* location card */}
          <SmallCard
            heightTrigger={true}
            icon={Vector2}
            areaName={"small3"}
            header={"Your Location"}
          >
            <CardTextArea disabled value={myLocation} />
          </SmallCard>
          {/* empty components as shown in the UI but commented them as they were useless */}
          {/* <LargeCard icon={Vector3} header={"Action Points"} />
        <HorizontalCard icon={Vector4} header={"Action Points"} /> */}
        </Page>
      ) : (
        <Spinner />
      )}
    </>
  );
}
