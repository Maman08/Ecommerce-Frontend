import React from 'react'
import { Grid } from '@mui/material'
import { AdjustOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
function OrderCard() {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[6rem] h-[6rem] object-cover object-top' src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/m/i/k/m-686-juliet-purimaa-original-imahyrffwyydt4zk.jpeg?q=70" alt="" />
                <div className='ml-5 space-y-2'>
                    <p>Womens Slim Mid black kurti</p>
                    <p className='opacity-50 text-sm font-semibold'>Size: M</p>
                    <p className='opacity-50 text-sm font-semibold'>Color: Black</p>
                </div>
            </div>
        </Grid>

        <Grid item xs={2}>
           <p>₹699</p>
        </Grid>
        <Grid item xs={4}>
           {true &&
            <div>
            <p>
            <AdjustOutlined className='text-green-600 mr-2 text-sm'/>
            <span>Delivered On March 03</span>
           </p>
           <p className='text-xs'>Your Item has been delivered</p>
            </div>
           }
           {false &&
            <p>
            <span>Expected Delivery On Mar 03</span>
           </p>

           }
        </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard