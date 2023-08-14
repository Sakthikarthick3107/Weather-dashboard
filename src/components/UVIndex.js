import React, { useEffect, useState } from 'react'
import StyledBox from '../EditedTags/StyledBox'
import StackSpBtn from '../EditedTags/StackSpBtn'
import { IconButton, LinearProgress, Stack, Typography } from '@mui/material'

import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
const UVIndex = () => {
    const zeroVal = 100
    const threeVal = 100
    const sixVal = 30
    const[zero , setZero] = useState(0)
    const[three , setThree] = useState(0)
    const[six , setSix ] = useState(0)

    useEffect(() =>{
        const animate1 = setInterval(()=>{
            if(zero < zeroVal){
                setZero((prev) =>prev+1)
            }
        },5)
        return ()=>clearInterval(animate1)
    })
    useEffect(() =>{
        const animate2 = setInterval(()=>{
            if(three < threeVal){
                setThree((prev) =>prev+1)
            }
        },5)
        return ()=>clearInterval(animate2)
    })
    useEffect(() =>{
        const animate3 = setInterval(()=>{
            if(six < sixVal){
                setSix((prev) =>prev+1)
            }
        },5)
        return ()=>clearInterval(animate3)
    })

  return (
    <>
      <StyledBox>
            <StackSpBtn>
            <Typography variant='body2'>UV Index</Typography>
            <IconButton><WbSunnyOutlinedIcon fontSize='small' /></IconButton>
            </StackSpBtn>
            <Stack direction='row' display='flex' alignItems='flex-end' justifyContent='center' spacing={1}>
                <Typography variant='h5' fontWeight='bold' >4</Typography>
                <Typography variant='body2'>medium</Typography>
            </Stack><br/>

            <Stack direction='row' display='flex' justifyContent='space-around'>
              <Stack direction='column'>
                <Typography variant='body2'>0-2</Typography>
                <LinearProgress sx={{height:7,width:30 ,borderRadius:5}} variant='determinate' value={zero}/>
              </Stack>
              <Stack direction='column'>
                <Typography variant='body2'>3-5</Typography>
                <LinearProgress sx={{height:7,width:30 ,borderRadius:5}} variant='determinate' value={three}/>
              </Stack>
              <Stack direction='column'>
                <Typography variant='body2'>6-7</Typography>
                <LinearProgress sx={{height:7,width:30 ,borderRadius:5}} variant='determinate' value={six}/>
              </Stack>
              <Stack direction='column'>
                <Typography variant='body2'>8-10</Typography>
                <LinearProgress sx={{height:7,width:30 ,borderRadius:5}} variant='determinate' value={0}/>
              </Stack>
              <Stack direction='column'>
                <Typography variant='body2'>11+</Typography>
                <LinearProgress sx={{height:7,width:30 ,borderRadius:5}} variant='determinate' value={0}/>
              </Stack>
              </Stack>
          </StyledBox>
    </>
  )
}

export default UVIndex
