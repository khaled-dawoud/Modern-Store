import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline';

const CartCount = ({onOpenCart, onClearCartItems, totalQuantity}) => {
  return (
   <>
      <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
        <div className='flex items-center gap-3'>
            <div className='grid items-center cursor-pointer' 
            onClick={onOpenCart}
            >
                <XMarkIcon className='w-5 h-5 hover:text-slate-900 text-orange-500 stroke-[2]' />
            </div>
            <div className='grid items-center'>
                <h1 className='text-base font-medium text-slate-900'>Your Cart <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-sm'>( {totalQuantity} Items)</span></h1>
            </div>
        </div>
        <div className='flex items-center'>
            <button type='button' className='rounded bg-theme-cart active:scale-90 p-0.5'
            onClick={onClearCartItems}
            >
                <div className='h-5 w-20 text-white stroke-[2] flex justify-center items-center' > 
                    <div className='hover:text-orange-500'>Clear All</div>
                </div>
            </button>
        </div>
      </div>
   </>
  )
}

export default CartCount