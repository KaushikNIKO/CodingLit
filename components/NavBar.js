import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>


    <div className='flex space-x-5 items-center'>

<div>
<Link href="/">
  <img className='w-44 h-44 hidden lg:inline-flex object-contain cursor-pointer' src="/codinglitlogo.png" alt='logo' />
</Link>
  <h2 className="w-44 lg:hidden  cursor-pointer text-xl font-bicubik">CL🔥</h2>
</div>

<div className='hidden md:inline-flex items-center space-x-5 cursor-pointer'>
  <Link href="/About">
<h3>About</h3>
  </Link>
  <Link href="/Contact">
<h3>Contact</h3>
  </Link>
</div>
    </div>
    <div className=" hidden lg:flex items-center cursor-not-allowed space-x-5 text-blue-500">
 

<div className='search hidden'>
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Articles..." required/>

    </div>
</form>
</div>

     
      <h3 className='border px-4 py-1 rounded-full border-black'>Sign In</h3>
    </div>
<div className="lg:hidden items-center">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
</svg>
</div>

    </header>
  )
}

export default NavBar