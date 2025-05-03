// components/TeamExperience.tsx
import { navigationImages } from "@/components/assets";
import Image from "next/image";

export default function TeamExperience() {
  return (
    <section className="bg-[#faf5ee] py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Stats */}
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 text-black">
          <div>
            <h2 className="text-5xl font-semibold">25k</h2>
            <p className="text-sm mt-2">Project<br />completed</p>
          </div>
          <div>
            <h2 className="text-5xl font-semibold">8k</h2>
            <p className="text-sm mt-2">Happy<br />customers</p>
          </div>
          <div>
            <h2 className="text-5xl font-semibold">15</h2>
            <p className="text-sm mt-2">Years<br />experiences</p>
          </div>
          <div>
            <h2 className="text-5xl font-semibold">98</h2>
            <p className="text-sm mt-2">Awards<br />achievement</p>
          </div>
        </div>

        {/* Right Side Static Image */}
        <div className="w-full">
          <Image
            src={navigationImages.experience}
            alt="Team Experience Grid"
            width={700}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
