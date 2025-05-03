import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { navigationImages } from "../assets"; // Replace with your image object

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-16 w-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={navigationImages.hero}
          alt="Background"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-24 relative z-10 w-full">
        {/* First Row: MARK + Video Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <h1 className="text-[80px] sm:text-[140px] md:text-[180px] font-extrabold uppercase text-black leading-none">
            MARK
          </h1>
          <div className="mt-8 md:mt-0 flex items-center gap-4">
            <div className="bg-[#19203D] w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center">
              <PlayCircle className="text-white w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div>
              <p className="text-black font-bold">WATCH</p>
              <p className="text-black">VIDEO INTRO</p>
            </div>
          </div>
        </div>

        {/* Second Row: Paragraph + ETING + Image */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-8">
          {/* Left Side: Paragraph */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-md">
              Static and dynamic secure code review can prevent a day before your product is even released. We can integrate with your dev environment.
            </p>
          </div>

          {/* Right Side: ETING + Image */}
          <div className="relative md:w-1/2 w-full flex items-end">
            <h1 className="text-[80px] sm:text-[140px] md:text-[180px] -ml-50 font-extrabold uppercase text-black leading-none z-10">
              ETING
            </h1>
            <div className="absolute top-30 left-0 w-full h-full z-0">
              <Image
                src={navigationImages.hero} // Replace with a distinct image if needed
                alt="Side visual"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
