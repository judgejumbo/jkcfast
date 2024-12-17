"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";

const Bnlogin = ({ session, extraStyle }) => {
  const dashBoardUrl = "/dashboard";

  if (session) {
    return (
      <Link
        href={dashBoardUrl}
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        {" "}
        Welcome Back {session.user.name || "friend"}
      </Link>
    );
  }
  return (
    <button
      className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      onClick={() => {
        signIn(undefined, { callbackUrl: dashBoardUrl });
      }}
    >
      Get Started
    </button>
  );
};

export default Bnlogin;
