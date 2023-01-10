import React from 'react'
import { Link } from 'react-router-dom'

export const Zadania = () => {
  return (
    <div className='pl-6 pr-10 lg:pr-40 pl-20'>
      <p className='font-sans text-2xl font-bold pb-2 pt-3 '>
        Zadania
      </p>
      <div >
        <Link className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium" to="/first">
          First
        </Link>
        <Link className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium" to="/second">
          Second
        </Link>
        <Link className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium" to="/third">
          Third
        </Link>
      </div>
    </div>
  )
}
