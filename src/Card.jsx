import React from 'react';
import assets from './assets/character.png.png';


function Card(props) {
    return(
        <div className='m-3 lg:m-5 mb-5'>
            <div className='p-3 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:transition-all'>
                <img className='w-full h-32 sm:h-48 object-contain' src= {assets} alt="image" />
                <span className='font-semibold ml-4'> {props.meal} </span>
                <span className='block text-gray-500 text-sm ml-4'> {props.cook} </span>
            </div>
            {/* <div className='bg-purple-400 text-white text-xs uppercase font-bold rounded-full p-2 absolute top-0'>
                <span>25 mins</span>
            </div> */}
        </div>
    );
}

export default Card;