import React from 'react';
import { Search, ShoppingBag, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

function Navbar(props) {
    return (
        <div className='h-16'>
            <div className='px-6 py-3 flex justify-between items-center'>
                <div className='flex-1 flex items-center'>
                    <span className='cursor-pointer text-sm'>En</span>
                    <div className='border border-solid border-gray-300 flex items-center ml-6 p-1'>
                        <input type='text' className='border-none'/>
                        <Search className='w-6 h-6 text-gray-500'/>
                    </div>
                </div>
                <div className='flex-1 text-center'>
                    <h1 className='font-bold text-3xl'>FAIZAN.</h1>
                </div>
                <div className='flex-1 flex items-center justify-end'>
                    <div className='text-sm cursor-pointer ml-6'>REGISTER</div>
                    <div className='text-sm cursor-pointer ml-6'>LOGIN</div>
                    <div className='text-sm cursor-pointer ml-6'>
                        <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined className='w-6 h-6'/>
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
