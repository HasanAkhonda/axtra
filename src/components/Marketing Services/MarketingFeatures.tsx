import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Search Engine Optimization",
    description:
      "We help brands stand out through powerful, elegant visual design. Our design mainly follows this philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
  },
  {
    title: "Email Marketing",
    description:
      "We help brands stand out through powerful, elegant visual design. Our design mainly follows this philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
  },
];

export default function MarketingFeatures() {
  return (
    <section className="bg-white py-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start justify-between gap-8 border-b border-gray-200 pb-16"
          >
            {/* Left Title */}
            <div className="w-full md:w-1/3">
              <h3 className="text-3xl font-extrabold text-black leading-tight uppercase">
                {service.title}
              </h3>
            </div>

            {/* Description + Features */}
            <div className="w-full md:w-2/3 flex justify-between items-center">
              <div className="text-black max-w-xl space-y-4">
                <p className="text-lg">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-base font-semibold">
                      + {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Circle Button */}
              <button className="w-28 h-28 rounded-full border border-gray-300 flex items-center justify-center shrink-0 ml-8 hover:bg-gray-100 transition">
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  Details <ArrowUpRight size={16} />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
