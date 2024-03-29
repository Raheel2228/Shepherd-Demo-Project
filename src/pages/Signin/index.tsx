import * as React from "react";
import { MyButton } from "../../commons/Buttons";
import GoogleIcon from "../../assets/google.svg";
import { SignInContainer } from "./styles";
import Vector from "../../assets/Vector (4).svg";
import { SmallCard } from "../../commons/Cards/SmallCard";
export interface IAppProps {
  signInWithGoogle: Function;
}

export default function SignIn(props: IAppProps) {
  const { signInWithGoogle } = props;
  return (
    <SignInContainer>
      <SmallCard
        icon={Vector}
        heightTrigger={true}
        areaName={"small2"}
        header={"Sign In"}
      >
        <MyButton
          buttonIcon={[GoogleIcon, GoogleIcon]}
          onClick={() => signInWithGoogle()}
        >
          Sign in with Google
        </MyButton>
      </SmallCard>
    </SignInContainer>
  );
}
