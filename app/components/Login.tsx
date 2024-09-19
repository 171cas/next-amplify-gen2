"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";
import { FC, useEffect } from "react";

interface LoginProps {
  user?: AuthUser;
}

const Login: FC<LoginProps> = ({ user }) => {
  //#region
  //#endregion
  useEffect(() => {
    if (user) redirect("/");
  }, [user]);

  return null;
};

export default withAuthenticator(Login);
