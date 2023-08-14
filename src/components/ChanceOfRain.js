import React, { useEffect, useState } from 'react'
import StyledBox from '../EditedTags/StyledBox'
import StackSpBtn from '../EditedTags/StackSpBtn'
import { IconButton, LinearProgress, Typography } from '@mui/material'
import { BeachAccessOutlined } from '@mui/icons-material'

const ChanceOfRain = () => {
    const val = 42
    const[value , setValue] = useState(0)
    useEffect(()=>{
        const animate = setInterval(() =>{
            if(value < val){
                setValue((prev) => prev+1)
            }
        },5)
        return ()=>clearInterval(animate)
    })
  return (
    <>
      <StyledBox>
            <StackSpBtn>
            <Typography variant='body2'>Chance of rain</Typography>
            <IconButton><BeachAccessOutlined fontSize='small'/></IconButton>
            </StackSpBtn>
            <Typography variant='h4' fontWeight='bold' textAlign='center'>42%</Typography><br/>
            <LinearProgress sx={{height:15 ,borderRadius:5}} variant='determinate' value={value}/>
          </StyledBox>
    </>
  )
}

export default ChanceOfRain
