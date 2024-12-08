import Link from "next/link";

// this button sends people to the login or dashboard

// destructing the isLoggedIn

const Bnlogin = ({ isLoggedIn, name }) => {
  if (isLoggedIn) {
    return <Link href="/dashboard "> Welcome Back {name}</Link>;
  }
  return <button>Login </button>;
};
export default Bnlogin;
