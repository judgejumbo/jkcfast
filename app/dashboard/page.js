import ButtonLogout from "@/components/ButtinLogout";

// import Link from "next/link"; - It used to be in there

export default function Dashboard() {
  return (
    <main>
      <h1 className="text-2xl font-bold border-solid bg-lime-400 border-4 border-slate-600 p-2 text-center">
        {" "}
        Private Dashboard{" "}
      </h1>

      <ButtonLogout />

      {/* <Link href="/"> Home</Link> */}
    </main>
  );
}
