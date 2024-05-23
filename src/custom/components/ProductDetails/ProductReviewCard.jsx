import React from 'react'
import { Rating } from '@mui/material'
import { Grid ,Avatar,Box} from '@mui/material'
function ProductReviewCard() {
  return (
    <div>
       <Grid container spacing={2} gap={3}>

       <Grid item xs={1}>
             <Box>
                <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>M</Avatar>
             </Box>
       </Grid>

       <Grid item xs={9}>
        <div className="space-y-2">
            <div>
                <p className='font-semibold text-lg'>Ram</p>
                <p className='opacity-70'>April 5,2024</p>
            </div>
        </div>
        <Rating value={4.5} name='half-rating' readOnly precision={0.5}/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas exercitationem esse totam.</p>
       </Grid>

       </Grid>
    </div>
  )
}

export default ProductReviewCard