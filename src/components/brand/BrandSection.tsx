import {
  Apple,
  Chrome,
  Github,
  Layers,
  Slack,
  Youtube,
} from "lucide-react";
  
  const BrandSection = () => {
    return (
      <section className="bg-white py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-[18px] font-normal text-gray-800 mb-12" style={{ fontFamily: "Kanit, sans-serif" }}>
            WE WORKED WITH GLOBAL LARGEST BRANDS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <Github size={40} />
              <span className="text-sm font-medium uppercase">Creative</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <Layers size={40} />
              <span className="text-sm font-medium uppercase">Creative</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <Chrome size={40} />
              <span className="text-sm font-medium uppercase">Innovate</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <Slack size={40} />
              <span className="text-sm font-medium">Express</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <Apple size={40} />
              <span className="text-sm font-medium uppercase">Brandname</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <Youtube size={40} />
              <span className="text-sm italic text-xs">Tagline Space</span>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BrandSection;
  