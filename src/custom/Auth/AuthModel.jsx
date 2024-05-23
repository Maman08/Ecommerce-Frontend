import React from 'react'
import {Box,Modal} from '@mui/material'
import Register from './Register';
import { useLocation } from 'react-router-dom';
import Login from './Login';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline:'none',
    p: 4,
  };
  

function AuthModel({handleClose,open}) {

  const location =useLocation();

  return (
    <div>
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    {location.pathname==="/login"?<Login/>:<Register/>}
    
  </Box>
</Modal>
    </div>
  )
}

export default AuthModel