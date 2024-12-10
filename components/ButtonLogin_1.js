import Link from "next/link";

// this button sends people to the login or dashboard

// destructing the isLoggedIn

const Bnlogin = ({ isLoggedIn, name, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard "
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        {" "}
        Welcome Back {name}
      </Link>
    );
  }
  return <button>Login </button>;
};
export default Bnlogin;
