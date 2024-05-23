import React from 'react'
import { IconButton } from '@mui/material'
import {Button} from '@mui/material'
import { RemoveCircleOutline ,AddCircleOutline} from '@mui/icons-material'
function CartItem() {
  return (
    <div className='p-5 shadow-lg rounded-md'>

    <div className="flex items-center">
        <div className=' w-[6rem]  h-[6rem] lg:w-[9rem] lg:h-[9rem]'>
        <img className='w-full h-full object-cover object-top' src="https://rukminim2.flixcart.com/image/612/612/xif0q/top/p/o/h/m-1-peach-cross-top-shions-original-imaguhd9w6agmhfn.jpeg?q=70" alt="" />

        </div>
        <div className='ml-5 space-y-1'>
             <p className='font-semibold'>Women's Orange Top</p>
             <p className='opacity-70'>Size: M,Orange</p>
             <p className='opacity-70 mt-2'>Seller: Crishtaliyo 2fashion</p>

             <div className="flex space-x-5 items-center text-gray-900 mt-10">
                <p className='font-semibold'>$16</p>
                <p className="opacity-50 line-through">$20</p>
                <p className='text-green-600 font-semibold'>5% Off</p>
            </div>

        </div>
        
    </div>
    <div className='lg:flex items-center lg:space-x-10 pt-4'>
              <div className="flex items-center space-x-2">
                <IconButton sx={{color:"rgb(145 85 253)"}} >
                    <RemoveCircleOutline/>
                </IconButton>
                <span className='py-1 px-7 border rounded-sm'>3</span>
                <IconButton sx={{color:"rgb(145 85 253)"}}>
                <AddCircleOutline/>
                </IconButton>
              </div>
              <div>
                <Button sx={{color:"rgb(145 85 253)"}}>Remove</Button>
              </div>
        </div>
         
    </div>
  )
}

export default CartItem