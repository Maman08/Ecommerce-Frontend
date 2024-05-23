import React from 'react'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import AddressCard from '../AddressCard/AddressCard'
function OrderSummery() {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard/>
        </div>

        <div>
         <div className='lg:grid grid-cols-3 lg:px-1 lg:py-10 relative'>
         <div className='col-span-2'>
         {[1,1,1,1,1,1,1].map((item)=><CartItem/>)}
         </div>
         <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
             
             <div className='border px-4'>
               <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
               <hr />
               <div className='space-y-3 font-semibold'>
                   <div className='flex justify-between pt-3 text-black'>
                    <span>Price</span>
                    <span>₹371</span>
                   </div>
                   <div className='flex justify-between pt-3 text-black'>
                    <span>Discount</span>
                    <span className='text-green-600'>-₹371</span>
                   </div>
                   <div className='flex justify-between pt-3 text-black'>
                    <span>Delivery Charge</span>
                    <span className='text-green-600'>Free</span>
                   </div>
                   <div className='flex justify-between pt-3 text-black font-bold'>
                    <span>Total Amount</span>
                    <span className='text-green-600'>₹371</span>
                   </div>
               </div>

               <Button className='w-full mt-5 mb-3' variant="contained" sx={{my:"2rem",px:"2.5rem",py:"0.7rem",bgcolor:"#9155fd"}}>Checkout</Button>
             </div>

         </div>
         </div>
         
        
    </div>


    </div>
  )
}

export default OrderSummery