import worker1 from "../assets/heroSection/worker1.png";
import worker2 from "../assets/heroSection/worker2.png";
import play_blue from "../assets/icons/Play-blue.png";
import Success_blue from "../assets/icons/Success-blue.png";
import whiteDots from "../assets/heroSection/Group 1.png";

export default function HeroSection() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between mx-auto p-6 max-w-6xl mt-12">
    {/* Left Text Section */}
    <div className="text-left space-y-6 gap-5">
      <div className="quicksand-700   bg-gradient-to-b from-green-400  to-blue-600 bg-clip-text text-transparent">
        WhatsApp Learning <br />
        to Transform your <br />
        Delivery Workforce
      </div>
      <p className="text-gray-700  nunito-400 w-3/4 pt-6">
        Unlock their True Potential with AI-Driven Vernacular Training
        Content and WhatsApp learning.
      </p>

      {/* Buttons */}
      <div className="space-x-5 py-8 ">
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
          Try chaabi for Free
        </a>
        <a
          href="/"
          className="px-6 py-3 border border-gray-400 text-gray-600 bg-white font-semibold rounded-md hover:bg-gray-100 transition">
          View Demo
        </a>
      </div>
    </div>

    {/* Right Image Section */}
    <div className=" mt-8 md:mt-0">
      <div className="relative">
        <img
          src={worker1}
          alt="Delivery Person"
          className="w-80 h-auto rounded-lg  shadow-lg"
        />
        <div className="absolute top-8 right-[-150px] bg-[#E7EFFF] p-2 items-center rounded-xl w-2/3 shadow-md flex gap-4 ">
          <img src={play_blue} alt="Play" className="w-100" />
          <span className="text-sm font-semibold text-blue-600">
            Introduction to vehicle training
          </span>
        </div>
        <div className="absolute bottom-[-30px] left-[-100px] bg-[#E7EFFF] p-2 items-center rounded-xl w-2/3 shadow-md flex gap-4 ">
          <img src={Success_blue} alt="Play" className="w-100" />
          <span className="text-sm font-semibold text-blue-600">
            Reduced Delivery Time
          </span>
        </div>
        <img
          src={worker2}
          alt="Construction Worker"
          className="w-60 h-auto mt-4 absolute right-[-180px] bottom-[-100px] rounded-lg shadow-lg"
        />
        <img
          src={whiteDots}
          alt="White Dots"
          className="w-100 absolute top-[-40px] left-[-40px] z-[-1]"
        />
        <img
          src={whiteDots}
          alt="White Dots"
          className="w-100 absolute bottom-[-10px] right-[-220px] z-[-1]"
        />
      </div>
    </div>
  </main>
  );
}
