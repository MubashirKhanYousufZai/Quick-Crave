import Image from 'next/image'
import React from 'react'
import { IoFastFoodOutline } from 'react-icons/io5'
import { RiMenuSearchLine } from 'react-icons/ri'

const Hero = () => {
  return (
    <div>
      <section className="text-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="Quick Crave" width={720} height={600}
            src="/logo.webp"
            />
            <div className="text-center lg:w-2/3 w-full">
            <div className="flex gap-2 text-center justify-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Quick Crave 
            </h1>
            <IoFastFoodOutline className='text-3xl'/>
            </div>
            <p className="mb-8 leading-relaxed">
              Welcome to Quick Crave! We are here to satisfy your 
              cravings with delicious coffee, fresh pastries, and gourmet 
              sandwiches. Whether you are stopping by for a morning boost or a lunchtime
              treat, our cozy atmosphere and friendly service make every visit a pleasure.
              Come in and discover your new favorite bite!
            </p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  <a href="/components/menu" className='flex gap-2'>Menu<RiMenuSearchLine className='text-2xl'/></a>
                </button>
            </div>
            </div>
        </div>
      </section>

    </div>
  )
}

export default Hero
