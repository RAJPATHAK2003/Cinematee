import React from 'react'
import Logo from "../assests/errorPage.jpg";
import { Link } from 'react-router-dom'
 export const PageNotFound = () => {
  return (
    <main>
      <section>
        <div>
          <p className='font-bold my-3 py-3 text-red-400'>Error 404 oops!</p>
          <img src={Logo} className="w-5/12" alt="Cinemate Logo" />
        </div>
        <div>
          <Link to="/">
              <button className='border my-3 py-3 bg-teal-900 text-white px-2'>Back to home</button>
          </Link>
        </div>
      </section>
    </main>
  )
} 


