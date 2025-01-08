import React, { useState, useEffect } from 'react';
import { useTheme } from '../contects/ThemeContext';
import { ContactForm } from './ContactForm';

export default function PricingTable() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-[#F5F5F5]';
  const tablebg = theme === 'dark' ? 'bg-black' : 'bg-white';



  const handleViewPricing = () => {
    setIsContactFormOpen(true);
  };

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
    setIsContactFormOpen(false);
    setIsVisible(true);
  };

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
    <div className={`w-full ${bgColor} ${textColor} sm:p-8 ${isFormSubmitted && isVisible ? 'min-h-screen' : 'h-auto'}`}>
      <div className={`max-w-[1300px] mx-auto px-4 ${isFormSubmitted && isVisible ? '' : 'h-full flex flex-col justify-center'}`}>
        {/* Title and Button */}
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl font-bold pb-6">Features and Pricing</h2>
          <button 
            onClick={handleViewPricing}
            className="mb-8 px-4 py-2 bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] text-white rounded-md"
          >
            View Pricing
          </button>
        </div>

        <ContactForm 
          isOpen={isContactFormOpen} 
          onClose={() => setIsContactFormOpen(false)}
          onSubmit={handleFormSubmit}
        />

        {isFormSubmitted && isVisible && (
          <React.Fragment>
            {/* Mobile View */}
            <div className="sm:hidden">
              {["Lite", "Enterprise"].map((plan, planIndex) => (
                <div
                  key={plan}
                  className="mb-8 rounded-xl overflow-hidden relative p-[1px] bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C]"
                >
                  <div className={`${tablebg} rounded-2xl`}>
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
                <div className={`${tablebg} rounded-3xl`}>
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
                <div className={`${bgColor} rounded-3xl`}>
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
                <div className={`${bgColor} rounded-3xl`}>
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
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

