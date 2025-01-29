import Image from 'next/image';
import React from 'react';

const Hero2 = () => {
  return (
    <section className="text-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">

    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl title-font text-4xl font-bold lg:w-1/3 lg:mb-0 mb-4">
       Quick Crave!
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
        Enjoy the best sandwich, coffee, and fast food in a cozy atmosphere! Our menu offers a wide variety of mouth-watering dishes, perfect for every craving.
      </p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="Coffee" width={500} height={300}
            className="w-full object-cover h-full object-center block rounded-xl"
            src="/coffee1.jpeg"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="Coffee" width={500} height={300}
            className="w-full object-cover h-full object-center block rounded-xl"
            src="/coffee2.jpeg"
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image
            alt="Pasta" width={600} height={350}
            className="w-full h-full object-cover object-center block rounded-xl"
            src="/pasta.jpeg"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image
            alt="Sandwich" width={500} height={300}
            className="w-full h-full object-cover object-center block rounded-xl"
            src="/sandwich.jpeg"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="Soda" width={500} height={300}
            className="w-full object-cover h-full object-center block rounded-xl"
            src="/soda1.jpeg"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="Soda" width={600} height={350}
            className="w-full object-cover h-full object-center block rounded-xl"
            src="/soda2.jpeg"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero2;
