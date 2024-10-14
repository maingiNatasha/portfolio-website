import React from 'react';
import { FallingLines } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <FallingLines
                color="#0284c7"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
            />
            <h3 className='font-bold text-2xl dark:text-white'>Loading...</h3>
        </div>
    )
};

export default Loader