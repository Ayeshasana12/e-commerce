import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react';
import SignUpImg from '../../../assets/signup.svg'

const SignUp = () => {
    return (
        < div className='m-3'>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}
                    className='text-center'>
                    <img className='img-fluid' src={SignUpImg} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} className='text-center'>
                    <Box>
                        <Typography variant='h4'className='mt-3'>Get Start Shopping</Typography>
                        <Typography variant='body2' className='my-3'>Welcome to FreshCart! Enter your email to get started.</Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField  fullWidth placeholder='First Name' size='small'/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth placeholder='Second Name'size='small' />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField type='Email' fullWidth 
                            placeholder='Enter Your Email'size='small' />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField type='Password' fullWidth 
                            placeholder='Enter Your Email'size='small' />
                        </Grid>
                        <Grid item xs={12} >
                           <Button variant='contained' fullWidth>Register</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignUp