import Link from "next/link";

// this button sends people to the login or dashboard

// destructing the isLoggedIn

const Bnlogin = ({ session, extraStyle }) => {
  if (session) {
    return (
      <Link
        href="/dashboard "
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        {" "}
        Welcome Back {session.user.name}
      </Link>
    );
  }
  return <button>Login </button>;
};
export default Bnlogin;
