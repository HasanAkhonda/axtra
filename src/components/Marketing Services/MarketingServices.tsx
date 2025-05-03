// components/MarketingServices.tsx
export default function MarketingServices() {
    return (
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Title Block */}
          <div className="max-w-3xl">
            <p className="text-sm text-gray-500 uppercase tracking-widest">Services</p>
            <h2 className="text-5xl font-extrabold text-black leading-tight mt-2">
              Our Marketing <br />
              Services
            </h2>
          </div>
  
          {/* Description with left border */}
          <div className="mt-16 border-l-2 border-gray-300 pl-8 max-w-3xl text-gray-700 text-lg leading-relaxed">
            <p>
              Consumers today rely heavily on digital means to research products. We research how a brand blends and engages with its audience. Meanwhile, 51% of consumers say they use Google to research products before buying.
            </p>
          </div>
        </div>
      </section>
    );
  }
  