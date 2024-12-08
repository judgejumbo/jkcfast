import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Collect Customer Feedback To Build Better Products</h1>

      <div>
        Create a feedback board in minutes. This lets you prioritze developent
        to build products CUSTOMERS will love
      </div>
      <Link href="/dashboard"> Dashboard</Link>
    </main>
  );
}
