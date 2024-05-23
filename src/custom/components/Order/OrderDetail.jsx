import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid,Box } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { StarBorder } from '@mui/icons-material'
function OrderDetail() {
  return (
    <div className='px-5 lg:px-20'>
       <div>
       <h1 className='font-semibold text-xl-lg py-7 '>Delivery Address</h1>
       <AddressCard/>
       </div>
       <div className="py-20">
        <OrderTracker  activeStep={3}/>
       </div>
       <Grid className='space-x-5' container>
       {[1,1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}>
              <Grid item xs={6}>
                 <div className='flex items-center space-x-4'>
                  <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/8/e/o/xxl-mult-01-subhla-art-original-imahyc86bhyafbnf.jpeg?q=70" alt="" />
                  <div className='space-y-2 ml-5'>
                  <p className='font-semibold'>Womens Slim Mid black kurti</p>
                    <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Size: M</span> <span>Color: Black</span></p>
                    <p>Seller:Linearia </p>
                    <p>₹699</p>
                  </div>
                 </div>
              </Grid>

              <Grid item>
                   <Box sx={{color:deepPurple[500]}}>
                       <StarBorder sx={{fontSize:"2.3rem"}} className='px-1.5'/>
                       <span>Rate & Review Product</span>
                   </Box>
              </Grid>
        </Grid>)}
        
       </Grid>
    </div>
  )
}

export default OrderDetail