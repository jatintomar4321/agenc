export default function PricingTable() {
  const features = [
    "Custom Idea Generation",
    "Brainstorm Collaboration",
    "Explore Ideas",
    "Master Analytics",
    "Team Collaboration Tools",
    "Platform Integrations",
    "Setup & Onboarding Fee",
    "Subscription Price",
  ];

  const liteValues = [
    "Yes",
    "Yes",
    "No",
    "No",
    "No",
    "Yes",
    "Rs. 50000/-",
    "Rs. 25000/- per month",
  ];

  const enterpriseValues = [
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Rs. 1,50,000/-",
    "Rs. 75000/- per month",
  ];

  return (
    <div className="min-h-screen w-full relative bg-[#0C0C0C] text-white sm:p-8">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Title */}
        <div className="text-center text-2xl lg:text-4xl font-bold pb-10">
          Features and Pricing
        </div>

        {/* Mobile View */}
        <div className="sm:hidden">
          {["Lite", "Enterprise"].map((plan, planIndex) => (
            <div
              key={plan}
              className="mb-8 rounded-xl overflow-hidden relative p-[1px] bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C]"
            >
              <div className="bg-black rounded-xl">
                <div className="p-6 text-center bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] text-2xl">
                  {plan}
                </div>
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className={`flex justify-between p-4 relative text-lg ${
                      index === features.length - 1 ? "" : "border-b"
                    }`}
                  >
                    <span>{feature}</span>
                    <span>
                      {planIndex === 0 ? liteValues[index] : enterpriseValues[index]}
                    </span>
                    {index !== features.length - 1 && (
                      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tablet and Desktop View */}
        <div className="hidden sm:grid sm:grid-cols-[1fr,auto,auto] gap-4">
          {/* Features Column */}
          <div className="relative p-[1px] bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] rounded-3xl">
            <div className="bg-black rounded-3xl">
              <div className="p-6 text-center rounded-t-3xl bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] text-xl lg:text-2xl py-8">
                Features
              </div>
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className={`p-6 relative text-base lg:text-xl ${
                    index === features.length - 1 ? "" : ""
                  }`}
                >
                  {feature}
                  {index !== features.length - 1 && (
                    <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Lite Column */}
          <div className="relative p-[1px] bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] rounded-3xl">
            <div className="bg-black rounded-3xl">
              <div className="p-6 text-center rounded-t-3xl bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] text-xl lg:text-2xl py-8">
                Lite
              </div>
              {liteValues.map((value, index) => (
                <div
                  key={index}
                  className={`py-6 px-10 relative text-center text-base lg:text-xl ${
                    index === liteValues.length - 1 ? "" : " "
                  }`}
                >
                  {value}
                  {index !== liteValues.length - 1 && (
                    <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Column */}
          <div className="relative p-[1px] bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] rounded-3xl">
            <div className="bg-black rounded-3xl">
              <div className="p-6 text-center rounded-t-3xl bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] text-xl lg:text-2xl py-8">
                Enterprise
              </div>
              {enterpriseValues.map((value, index) => (
                <div
                  key={index}
                  className={`py-6 px-10 relative text-center text-base lg:text-xl ${
                    index === enterpriseValues.length - 1 ? "" : ""
                  }`}
                >
                  {value}
                  {index !== enterpriseValues.length - 1 && (
                    <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}