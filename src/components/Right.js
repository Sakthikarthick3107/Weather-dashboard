import React from 'react'
import StackSpBtn from '../EditedTags/StackSpBtn'
import { Grid, IconButton,  Stack, Typography } from '@mui/material'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DisplayChart from './DisplayChart';
import Humidity from './Humidity';
import Wind from './Wind';
import Precipitation from './Precipitation';
import UVIndex from './UVIndex';
import ChanceOfRain from './ChanceOfRain';
import FeelsLike from './FeelsLike';



const Right = () => {
  
  
  

  return (
    <>
      
      <StackSpBtn>
        <Stack direction='column' >
            <Typography variant='h6' fontWeight='bold'>Welcome Back Sakthikarthick</Typography>
            <Typography variant='body1'>Check out today's weather information</Typography>
        </Stack>
        <StackSpBtn>
            <MoreHorizOutlinedIcon/>
            <IconButton><AccountCircleOutlinedIcon fontSize='small'/></IconButton>
        </StackSpBtn>
      </StackSpBtn>

      <DisplayChart/><br/>

      <Typography variant='body1' fontWeight='bold' ml={2}>More details of the today weather</Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <Humidity/>
        </Grid>

        <Grid item xs={4}>
          <Wind/>
          
        </Grid>

        <Grid item xs={4}>
          <Precipitation/>
          
        </Grid>

        <Grid item xs={4}>
          <UVIndex/>
          
        </Grid>

        <Grid item xs={4}>
          <FeelsLike/>
          
        </Grid>

        <Grid item xs={4}>
          <ChanceOfRain/>
          
        </Grid>
      </Grid>
      
    </>
  )
}

export default Right

