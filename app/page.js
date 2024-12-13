import Bnlogin from "@/components/ButtonLogin_1";
import FAQListItem from "@/components/FAQListItem";
import Image from "next/image";
import productDemo from "./productDemo.jpeg";

export default function Home() {
  const isLoggedIn = true;
  const name = "Judge Jumbo";

  const pricingFeaturesList = [
    "Collect Customer Feedback",
    "Unlimited Boards",
    "Admin Dashborad",
    "24/7/ Support",
  ];

  return (
    <main>
      {/* HEADER */}
      <section className="bg-gray-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-8 py-2 mb-4">
          {" "}
          <div className="font-bold"> JJP CodeFast</div>
          <div className="space-x-4 hidden md:block">
            <a classname="link link-hover" href="#pricing">
              Pricing
            </a>
            <a classname="link link-hover" href="#faq">
              FAQ
            </a>
          </div>
          <div>
            <Bnlogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      {/* HERO */}
      <section className="text-center lg:text-left py-32 px-8 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start">
        <Image
          src={productDemo}
          alt="Product Demo Judge"
          className="w-96 rounded-xl"
        />

        <div>
          {" "}
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
            {" "}
            Collect Customer Feedback To Build Better Products
          </h1>
          <div className="opacity-90 mb-10">
            Create a feedback board in minutes. This lets you prioritze
            developent to build products CUSTOMERS will love
          </div>
          <Bnlogin isLoggedIn={isLoggedIn} name={name}></Bnlogin>
        </div>
      </section>
      {/* Pricing */}
      <section className="bg-gray-200" id="pricing">
        <div className="p-8 py-32 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-3xl font-extrabold mb-12 text-center">
            A pricing that adapts to your needs
          </h2>
          {/* card within pricing*/}
          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black"> $19</div>
              <div className="uppercase text-sm font-medium opacity-50">
                {" "}
                /month
              </div>
            </div>

            <ul className="space-y-2">
              {pricingFeaturesList.map((priceItem) => {
                return (
                  <li className="flex gap-2 items-center" key={priceItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="text-green-600 size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {priceItem}
                  </li>
                );
              })}
            </ul>
            <Bnlogin isLoggedIn={isLoggedIn} name={name} extraStyle="w-full" />
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-gray-200" id="faq">
        <div className="p-8 py-32 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-3xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <ul className="max-w-md mx-auto">
            {[
              {
                question: "What do I get exactly with this new app",
                answer: "Loreum ipseum Judge jumbo Rocks",
              },
              {
                question: "What do I get exactly2 can I pay for a trial",
                answer: "Loreum ipseum2",
              },
              {
                question:
                  "What do I get exactly3 - how many users do you really have",
                answer:
                  "Loreum ipseum3- we have around 2 million users so there",
              },
            ].map((qa) => (
              <FAQListItem key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
