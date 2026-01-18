import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  breadcrumbText: string;
  backgroundImage?: string;
}

export default function PageHero({
  title,
  breadcrumbText,
  backgroundImage = "/bg.png",
}: PageHeroProps) {
  return (
    <section className="relative h-[40vh] min-h-[300px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 md:px-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        
        <div className="flex items-center gap-2 text-white/90 text-sm md:text-base font-medium">
          <Link href="/" className="hover:text-red-500 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-red-500">{breadcrumbText}</span>
        </div>
      </div>
    </section>
  );
}
