import React from 'react';

function NavBar() {
    return(
        <div>
            <nav className='shadow-lg w-100 md:flex lg:flex '>
                <div>
                    <h1 className='uppercase font-bold text-2xl p-3'>Food<span className='text-purple-500'>.Ninja</span></h1>
                </div>
                <ul className='uppercase font-semibold md:flex md:justify-end md:mt-2 lg:mt-2'>
                    <li className='p-2 ml-2 hover:bg-purple-400 hover:text-white hover:transition-all cursor-pointer  lg:hover:border-b-2 md:hover:bg-white md:hover:text-purple-500 md:hover:border-purple-400
                    md:hover:border-b-2 lg:hover:bg-white lg:hover:text-purple-400  lg:hover:border-purple-400'>Home</li>
                    <hr />
                    <li className='p-2 ml-2 hover:bg-purple-400 hover:text-white hover:transition-all cursor-pointer md:hover:border-b-2 md:hover:border-purple-400 md:hover:bg-white md:hover:text-purple-500 lg:hover:border-b-2 lg:hover:bg-white lg:hover:text-purple-400 lg:hover:border-purple-400'>About</li>
                    <hr />
                    <li className='p-2 ml-2 hover:bg-purple-400 hover:text-white hover:transition-all cursor-pointer md:hover:border-b-2 md:hover:border-purple-400 md:hover:bg-white md:hover:text-purple-500 lg:hover:border-b-2 lg:hover:bg-white lg:hover:text-purple-400 lg:hover:border-purple-400'>Services</li>
                    <hr />
                    <li className='p-2 ml-2 hover:bg-purple-400 hover:text-white hover:transition-all cursor-pointer md:hover:border-b-2 md:hover:border-purple-400 md:hover:bg-white md:hover:text-purple-500 lg:hover:border-b-2 lg:hover:bg-white lg:hover:text-purple-400 lg:hover:border-purple-400'>Contact</li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar; 