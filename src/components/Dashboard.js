import React from 'react'
import { Box, Grid, } from '@mui/material'
import bg from '../images/bg.jpg'
import Left from './Left'
import Right from './Right'



const Dashboard = () => {
  return (
    <>
        <Box sx={{background: `url(${bg})` , height:'90vh' , width:'80vw',backgroundSize:'cover',borderRadius:12}}>
            <Grid container>
                <Grid item lg={3} sx={{color:'white'}}>
                    <Left/>
                </Grid>

                <Grid item lg={9}>
                    <Box sx={{height:'90vh',borderRadius:12 , backgroundColor:'#e4f1ff' ,padding:4 }}>
                        <Right/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        
      
    </>
  )
}

export default Dashboard
