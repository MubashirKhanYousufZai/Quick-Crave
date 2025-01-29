import React from 'react'
import { MdOutlineAddIcCall, MdOutlineDeliveryDining } from 'react-icons/md'
import { VscWorkspaceTrusted } from 'react-icons/vsc'

const Responsibilities = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-6">
                <VscWorkspaceTrusted size={32} />
              </div>
              <h2 className="text-lg font-medium text-gray-900 mb-2 text-center">
                Quality Products
              </h2>
              <p className="text-base text-gray-500 text-center">
                We offer the highest quality products to satisfy all cravings.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-6">
                <MdOutlineAddIcCall size={32} />
              </div>
              <h2 className="text-lg font-medium text-gray-900 mb-2 text-center">
                Online Order
              </h2>
              <p className="text-base text-gray-500 text-center">
                Convenient online ordering for your favorite meals anytime.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-6">
                <MdOutlineDeliveryDining size={32} />
              </div>
              <h2 className="text-lg font-medium text-gray-900 mb-2 text-center">
                Home Delivery
              </h2>
              <p className="text-base text-gray-500 text-center">
                Get your meals delivered straight to your doorstep, fast and easy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Responsibilities
