import React from 'react';

function MainContent() {
    return(
        <div className="px-16 py-6">
            <main>
                <div className='mb-3'>
                    <ul className='text-purple-400 flex sm:justify-start md:justify-end lg:justify-center'>
                        <li className='cursor-pointer hover:border-b-2 hover:border-purple-400 transition-all uppercase font-semibold tracking-wider'>
                        Log in</li>
                        <li className='ml-3 cursor-pointer hover:border-b-2 hover:border-purple-400 transition-all uppercase font-semibold tracking-wider'>Sign Up</li>
                    </ul>
                </div>
                <header className='mt-1'>
                    <h2 className='text-4xl font-semibold mb-3 text-purple-400'>Recipes</h2>
                    <h3 className='text-2xl font-semibold'>For Ninjas</h3>
                </header>
                <div>
                    <h2 className='mt-10 text-xl font-semibold mb-1 pb-2 underline'>Latest Recipes</h2>
                </div>
            </main>
        </div>
    );
}

export default MainContent;