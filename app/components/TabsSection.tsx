import { useState } from "react";
import { Transition } from "@headlessui/react";
import whatsapp_learning from "../assets/whatspp-learning.png";
import play from "../assets/icons/Play.png";
import Success from "../assets/icons/Success.png";
import Wreath from "../assets/icons/Wreath.png";

const tabs = [
  "Analytics",
  "Smart Enrollment",
  "Gamified Platform",
  "Vernacular Content",
];

export default function TabsSection() {
  const [selectedTab, setSelectedTab] = useState("WhatsApp Learning");

  return (
    <div className="flex justify-end items-center h-[70vh] space-y-6  mb-12" id="features">
      <div className="relative w-[90%] h-[80%] bg-white rounded-l-3xl shadow-lg overflow-hidden bg-gradient-to-r from-green-300 to-blue-200">
        {/* Left Section */}
        <div className="absolute left-0 top-0 w-full h-full flex">
          {/* Image Section */}
          <div className="w-[30%] h-full flex flex-col justify-center items-center space-y-5">
            <div className="relative">
              <img src={whatsapp_learning} alt="Phone" className="w-100" />
              <div className="absolute bg-[#018E42] text-white rounded-full px-6 py-1 flex gap-5 items-center top-3 left-[-40px]">
                <img src={Success} alt="Success" /> Reduced <br />
                Delivery Time
              </div>
              <div className="absolute bg-[#C2FFDE] text-black rounded-xl px-6 py-1 w-[65%] font-semibold flex items-center bottom-3 left-[-40px]">
                Tailor Courses for star professionals
                <img
                  src={Wreath}
                  alt="Wreath"
                  className=" absolute top-[-30px] right-[-10px]"
                />
              </div>
              <div className="absolute bg-[#018E42] text-white rounded-full w-[60%] text-[0.7rem] px-3 py-1 flex gap-5 items-center bottom-1 right-[-40px]">
                <img src={play} alt="Play" /> Introduction to vehicle training
              </div>
            </div>
          </div>

          {/* Transition Content Section */}
          <div className="w-[40%] h-full flex flex-col justify-center items-start px-10">
            <Transition
              show={selectedTab === "WhatsApp Learning"}
              enter="transform transition ease-in-out duration-500"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="transform transition ease-in-out duration-500"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full">
              <div className="text-left">
                <h1 className="font-quicksand text-[40px] font-semibold leading-[44px] tracking-[-0.02em] text-left text-[#052259]">
                  WhatsApp Learning
                </h1>
                <p className="font-nunito text-[22px] font-normal leading-[33px] text-left text-[#052259] mt-4">
                  Elevate your skills with our immersive and engaging learning
                  content available right on WhatsApp.
                </p>
              </div>
            </Transition>

            {tabs.map((tab) => (
              <Transition
                key={tab}
                show={selectedTab === tab}
                enter="transform transition ease-in-out duration-500"
                enterFrom="opacity-0 translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-full">
                <div className="text-left">
                  <h1 className="font-quicksand text-[40px] font-semibold leading-[44px] tracking-[-0.02em] text-left text-[#052259]">
                    {tab}
                  </h1>
                  <p className="font-nunito text-[22px] font-normal leading-[33px] text-left text-[#052259] mt-4">
                    Information about {tab} will be here. Add any specific
                    content or descriptions as required.
                  </p>
                </div>
              </Transition>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="absolute right-0 bottom-0 h-full flex">
          {tabs.map((tab) => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
            <div
              key={tab}
              className="rounded-b-full border-r-4 h-full p-5 border-white text-center transition items-center flex duration-300 cursor-pointer"
              onClick={() => setSelectedTab(tab)}
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}>
              <p className="font-quicksand font-bold text-[30px] text-nowrap text-left text-[#052259] hover:text-blue-600">
                {tab}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
