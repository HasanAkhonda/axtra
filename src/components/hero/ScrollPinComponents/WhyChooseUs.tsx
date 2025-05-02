// components/WhyChooseUsSection.tsx
import React from 'react';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-[#fef9f6] text-black font-sans flex items-center justify-center px-6">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-start gap-16 py-20">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <div className="text-xs font-bold uppercase tracking-wider">Why <br/>Choose Us</div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            KEYWORD, RESEARCH<br />
            STRATEGY, SURVEY,<br />
            & ANALYTICS
          </h2>
          <div className='mx-20'>
          <p className="text-sm text-gray-700 max-w-md">
            Attention, we take out our round glasses and our sweater with elbow patches to go
            back to the origins of the user experience: the first mention of the user and its
            importance was born in the...
          </p>
          <div className="flex mt-15 gap-3 pt-4">
            {['Google', 'Pinterest', 'Instagram'].map((item) => (
              <button
                key={item}
                className="px-4 py-1 border border-black rounded-full text-sm hover:bg-black hover:text-white transition duration-300"
              >
                {item}
              </button>
            ))}
          </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col gap-10">
          {[
            { percent: '60%', title: 'Strategy' },
            { percent: '95%', title: 'Audience' },
            { percent: '70%', title: 'Keyword' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-6">
              <div className="w-28 h-28 rounded-full border-2 border-black flex items-center justify-center text-2xl font-bold">
                {item.percent}
              </div>
              <div>
                <h4 className="text-md font-bold uppercase">{item.title}</h4>
                <p className="text-xs text-gray-700 mt-1 max-w-xs">
                  Your marketing strategy optimizing performances doesn’t have to be a guessing game.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
