import Bnlogin from "@/components/ButtonLogin_1";

export default function Home() {
  const isLoggedIn = true;
  const name = "Judge Jumbo";

  return (
    <main>
      <section className="p-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">
          {" "}
          Collect Customer Feedback To Build Better Products
        </h1>

        <div className="opacity-90 mb-10">
          Create a feedback board in minutes. This lets you prioritze developent
          to build products CUSTOMERS will love
        </div>
        <Bnlogin isLoggedIn={isLoggedIn} name={name}></Bnlogin>
      </section>
    </main>
  );
}
