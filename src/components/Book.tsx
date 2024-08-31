"use client";
import { FC } from 'react';

import HTMLFlipBook from 'react-pageflip';

const Book: FC = () => {
    return (
        <HTMLFlipBook width={300} height={500} className='border border-black'>
            <div>page 1</div>
            <div>page 2</div>
            <div>page 3</div>
            <div>page 4</div>
            <div>page 5</div>
            <div>page 6</div>
        </HTMLFlipBook>
    );
};

export default Book;