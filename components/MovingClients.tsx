import NextImage from "next/image";

export const MovingClients = () => {
    const companiesLogo = [
        { name: "Framer", logo: "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg", },
        { name: "Huawei", logo: "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg", },
        { name: "Instagram", logo: "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg", },
        { name: "Microsoft", logo: "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg", },
        { name: "Microsoft", logo: "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg", },
        { name: "Microsoft", logo: "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg", },
        { name: "Microsoft", logo: "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg", },
        { name: "Walmart", logo: "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg", }
    ];
    return (
        <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll 15s linear infinite;
                }

                .marquee-inner-testimonials {
                    animation: marqueeScroll 35s linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}
            </style>
            <h3 className="mt-16 text-sm md:text-base text-center text-gray-600 mb-14 font-bold">
                Trusted by leading brands, including —
            </h3>
            <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none mb-8">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

                <div className="flex marquee-inner will-change-transform max-w-5xl mx-auto">
                    {[...companiesLogo, ...companiesLogo].map((company, index) => (
                        <NextImage key={index} className="mx-11" src={company.logo} alt={company.name} width={100} height={40} />
                    ))}
                </div>

                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
            </div>
        </>
    );
}