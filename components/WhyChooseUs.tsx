
import Image from "next/image";

// Placeholder for an SVG icon component, replace with your actual SVG import
const BulletIcon = () => (
  <svg
    className="w-5 h-5 text-red-600 flex-shrink-0 mr-3"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    ></path>
  </svg>
);

// Placeholder for the "Why Choose Us" header icon
const HeaderIcon = () => (
  <svg
    className="w-4 h-4 text-red-600 inline-block mr-2"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">

      <div className="absolute  bottom-0 w-full h-9/10 bg-red-200 opacity-10 transform -skew-y-2 origin-bottom-left overflow-hidden">
    
      {/* Absolute Background Shape 1 (Top Left Angled Red Line/Overlay) */}
      <div className="absolute -top-10 left-0 w-full h-1/2 bg-red-600 transform -skew-y-15 origin-top-left -translate-y-1/4"></div>

      <div className="absolute  bottom-0 w-full h-1/2 bg-red-600 transform -skew-y-15 origin-bottom-right translate-y-1/4"></div>
       </div>

      <div className="container mx-auto px-8 relative z-10">
        {" "}
        {/* z-10 ensures content is above background shapes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text and Bullet Points */}
          <div>
            <p className="text-red-600 text-sm font-semibold uppercase mb-2">
              <HeaderIcon /> WHY CHOOSE US?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Why Gulf Resources?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We are unique because, we provide:
            </p>

            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-start">
                  <BulletIcon />
                  <p className="text-gray-700 text-base">
                    By leveraging their extensive industry networks and market
                    insights, these firms.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Images and Overlapping Elements */}
          <div className="hidden lg:block">
          <div className="
              relative bg-white rounded-xl shadow-lg p-4
              grid grid-cols-3 grid-rows-3 gap-4 justify-center
              aspect-square lg:aspect-auto h-[500px]
              "
          >
            {/* ITEM A: 9+ Years Circle (Small Box) */}
            <div className="
                col-span-1 row-span-1 justify-self-center align-self-center
                w-28 h-28 bg-red-600 rounded-full aspect-square
                flex flex-col items-center justify-center text-white text-center
                shadow-lg
            ">
                <span className="text-2xl font-bold">9+</span>
                <span className="text-sm leading-tight">Years of experience</span>
            </div>

            {/* ITEM B: Question Mark Image (Stretched across two rows) */}
            <div className="col-span-2 row-span-2 relative ">
                <Image
                    src="/question-mark.png" 
                    alt="Question Mark"
                    layout="fill"
                    objectFit="contain"
                />
            </div>

            {/* ITEM C: Hand/Icons Image (Small Box) */}
            <div className="col-span-1 row-span-1 relative bg-gray-900 rounded-lg overflow-hidden">
                <Image
                    src="/hand-icon.png" 
                    alt="Hand with icons"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            {/* ITEM D: Large Red Block (Stretched across two columns) */}
            <div className="col-span-3 row-span-1 bg-red-600 rounded-lg mt-4">
                {/* Content inside the red block goes here */}
            </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
