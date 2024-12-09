import Bnlogin from "@/components/ButtonLogin_1";

export default function Home() {
  const isLoggedIn = true;
  const name = "Judge Jumbo";

  return (
    <main>
      {/* HEADER */}
      <section className="bg-gray-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-2 mb-4">
          {" "}
          <div className="font-bold"> JJP CodeFast</div>
          <div className="space-x-4 hidden md:block">
            <a>Pricing</a>
            <a>FAQ</a>
          </div>
          <div>
            <Bnlogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      {/* HERO */}
      <section className="p-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          {" "}
          Collect Customer Feedback To Build Better Products
        </h1>

        <div className="opacity-90 mb-10">
          Create a feedback board in minutes. This lets you prioritze developent
          to build products CUSTOMERS will love
        </div>
        <Bnlogin isLoggedIn={isLoggedIn} name={name}></Bnlogin>
      </section>
      {/* Pricing */}
      <section className="bg-gray-200">
        <div className="p-8 py-32 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-3xl font-extrabold mb-12 text-center">
            A pricing that adapts to your needs
          </h2>
          {/* card */}
          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black"> $19</div>
              <div className="uppercase text-sm font-medium opacity-50">
                {" "}
                /month
              </div>
            </div>

            <ul>
              <li>Collect Customer Feedback</li>
              <li>Collect Customer Feedback</li>
              <li>Collect Customer Feedback</li>
              <li>Collect Customer Feedback</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
