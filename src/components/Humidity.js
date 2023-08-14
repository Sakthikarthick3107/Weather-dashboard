import React, { useEffect, useState } from 'react'
import StyledBox from '../EditedTags/StyledBox'
import StackSpBtn from '../EditedTags/StackSpBtn'
import { IconButton, LinearProgress, Stack, Typography } from '@mui/material'
import { WaterDropOutlined } from '@mui/icons-material'

const Humidity = () => {
    const good = 100
    const normal = 100
    const bad = 30
    const[goodVal , setGoodVal] = useState(0)
    const[normVal , setNormVal] = useState(0)
    const[badVal,setBadVal]= useState(0)

    useEffect(() =>{
        const animation1 = setInterval(() =>{
            if(goodVal < good){
                setGoodVal((prev) => prev+1)
            }
        },5)
        return ()=> clearInterval(animation1)
    })
    useEffect(() => {
        const animation2 = setInterval(()=>{
            if(normVal<normal){
                setNormVal((prev) => prev+1)
            }
        },5)
        return ()=> clearInterval(animation2)
    })
    useEffect(()=>{
        const animation3 = setInterval(()=>{
            if(badVal < bad){
                setBadVal((prev) => prev+1)
            }
        })
        return ()=>clearInterval(animation3)
    })

  return (
    <>
      <StyledBox>
            <StackSpBtn>
            <Typography variant='body2'>Humidity</Typography>
            <IconButton><WaterDropOutlined fontSize='small'/></IconButton>
            </StackSpBtn>
            <Stack direction='row' display='flex' alignItems='flex-end' justifyContent='center' spacing={1}>
                <Typography variant='h5' fontWeight='bold' >82%</Typography>
                <Typography variant='body2'>bad</Typography>
            </Stack><br/>
            

            <Stack direction='row' display='flex' justifyContent='space-around'>
              <Stack direction='column'>
                <Typography variant='body2'>good</Typography>
                <LinearProgress sx={{height:10,width:60 ,borderRadius:5}} variant='determinate' value={goodVal}/>
              </Stack>
              <Stack direction='column'>
                <Typography variant='body2'>normal</Typography>
                <LinearProgress sx={{height:10,width:60 ,borderRadius:5}} variant='determinate' value={normVal}/>
              </Stack>
              <Stack direction='column'>
                <Typography variant='body2'>bad</Typography>
                <LinearProgress sx={{height:10,width:60 ,borderRadius:5}} variant='determinate' value={badVal}/>
              </Stack>
            </Stack>

          </StyledBox>
    </>
  )
}

export default Humidity
