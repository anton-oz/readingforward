"use client";
import { FC, useCallback, useState } from 'react';

import HTMLFlipBook from 'react-pageflip';

const Book: FC = () => {

    const [centerBook, setCenterBook] = useState(false);

    const onFlip = useCallback((e: any) => {
        console.log('Current page: ' + e.data);
    }, []);

    const onInit = useCallback((e: any) => {
        console.log('current page: ', e.data.page);
        if (e.data.page === 0 ) {
            setCenterBook(true)
        }
    }, []);



    return (
        <HTMLFlipBook
            width={300} // Increased width
            height={500} // Increased height
            showCover={true}
            onFlip={onFlip}
            onInit={onInit}
            className='grid items-start place-items-center'
        >
            {/* Cover page */}
            <div className='bg-sky-600 text-white flex items-center justify-center  rounded-md' style={{ height: '100%' }}>
                <h1 className='text-6xl mt-[2em] p-4'>About Me</h1>
                <p>By: Nativida Osland</p>
            </div>

            {/* Page 1 */}
            <div className='bg-white p-12 border border-gray-300 shadow-inner rounded-md' style={{ height: '100%' }}>
                <div className="h-[75%] flex flex-col justify-center items-center">
                    <img src="https://placehold.co/200" alt="" />
                    {/* <h2 className='text-3xl'>Page 1</h2> */}
                    <p className='mt-4'>I'm Nativda, and I'm committed to inspiring the next generation of readers!</p>
                </div>
            </div>

            {/* Page 2 */}
            <div className='bg-white p-12 border border-gray-300 shadow-inner rounded-md' style={{ height: '100%' }}>
                <h2 className='text-3xl'>Page 2</h2>
                <p className='mt-4'>Content of page 2...</p>
            </div>

            {/* Add more pages as needed */}
            <div className='bg-white p-12 border border-gray-300 shadow-inner rounded-md' style={{ height: '100%' }}>
                <h2 className='text-3xl'>Page 3</h2>
                <p className='mt-4'>Content of page 3...</p>
            </div>
            <div className='bg-white p-12 border border-gray-300 shadow-inner rounded-md' style={{ height: '100%' }}>
                <h2 className='text-3xl'>Page 4</h2>
                <p className='mt-4'>Content of page 4...</p>
            </div>
            <div className='bg-white p-12 border border-gray-300 shadow-inner ' style={{ height: '100%' }}>
                <h2 className='text-3xl'>Page 5</h2>
                <p className='mt-4'>Content of page 5...</p>
            </div>
        </HTMLFlipBook>
    );
};

export default Book;
