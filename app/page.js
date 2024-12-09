import Bnlogin from "@/components/ButtonLogin_1";

export default function Home() {
  const isLoggedIn = true;
  const name = "Judge Jumbo";

  return (
    <main>
      <section className="bg-gray-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-2">
          {" "}
          <div className="font-bold"> JJP CodeFast</div>
          <div className="space-x-4">
            <a>Pricing</a>
            <a>FAQ</a>
          </div>
          <div>
            <Bnlogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
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
