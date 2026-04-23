import React from 'react';
import '../component/shimmer.css';

const Shimmer = () => {
    return (
        <div className='shimmer-card'>
            <div className='shimmer-flag'></div>
            <div className='shimmer-lines'>
                <div className='shimmer-line'></div>
                <div className='shimmer-line'></div>
                <div className='shimmer-line'></div>
                <div className='shimmer-line'></div>
                <div className='shimmer-line'></div>
                <div className='shimmer-line short'></div>

            </div>

        </div>
    )
}

export default Shimmer;
