import Link from "next/link";

// this button sends people to the login or dashboard

// destructing the isLoggedIn

const Bnlogin = ({ isLoggedIn, name }) => {
  if (isLoggedIn) {
    return (
      <Link href="/dashboard " className="btn btn-primary">
        {" "}
        Welcome Back {name}
      </Link>
    );
  }
  return <button>Login </button>;
};
export default Bnlogin;
