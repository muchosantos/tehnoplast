import { BoxProps } from '@/types/products';
import React from 'react';



const Box: React.FC<BoxProps> = ({title, subititle}) => {
    return (
        <div className='border border-[#e0e0e0] flex flex-col lg:flex-row lg:gap-10 rounded-lg overflow-hidden'>
            <div className='w-[100%] lg:w-[400px] h-[250px] bg-gray-200'></div>
            <div className='px-4 py-4 lg:w-[60%] flex flex-col justify-center'>
                <h3 className='text-[1.9rem] lg:text-[2.5rem] tracking-tighter mb-6'>{title}</h3>
                <p className='text-[1rem] text-[#676767] font-light'>Sa nizom opcija za prilagođavanje, možete birati između različitih vrsta stakla i {subititle}</p>
            </div>
        </div>
    );
};

export default Box;