import React, { useEffect } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register,getUser } from '../../State/Auth/Action.js'
import { store } from '../../State/store';


function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const userData={
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(register(userData))
    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              autoComplete="given-name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              autoComplete="family-name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              autoComplete="email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button className='bg-[#9155FD] w-full'  type="submit" variant="contained" size='large' sx={{padding:".8rem 0",bgcolor:"#9155FD"}}>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className='flex justify-center flex-col items-center'>
        <div className='flex item-center py-3'>
          <p>
            If you already have an account ?
          </p>
          <Button onClick={()=>navigate("/login")} className='ml-5 ' size='small'>LOGIN</Button>
        </div>
      </div>
    </div>
  );
}

export default Register;
