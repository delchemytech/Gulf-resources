import Image from 'next/image'
import React from 'react'

const RevInSection = () => {
  return (
<div className="relative flex container mx-auto max-w-7xl w-full h-[500px]  text-white items-center justify-start">
        <Image
          src={"/images/strippedBgRed.png"}
          fill
          alt={'background shades'}
          className="object-cover  -z-30"
        />
        </div>
  )
}

export default RevInSection
