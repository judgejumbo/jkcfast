import Link from "next/link";
export default function Dashboard() {
  return (
    <main>
      <h1 className="text-2xl font-bold border-solid bg-lime-400 border-4 border-slate-600 p-2 text-center">
        {" "}
        Dashboard{" "}
      </h1>

      <Link href="/"> Home</Link>
    </main>
  );
}
