import React, { useEffect, useState } from 'react'
import StyledBox from '../EditedTags/StyledBox'
import StackSpBtn from '../EditedTags/StackSpBtn'
import { IconButton, LinearProgress, Typography } from '@mui/material'
import AirIcon from '@mui/icons-material/Air';
const Wind = () => {
    const [progress ,setProgress] = useState(0)
    const value = 60
    useEffect(() => {
        const animationInterval = setInterval(() => {
            if(progress < value){
                setProgress((prev) => prev + 1)
            }
        },10);
        return ()=> clearInterval(animationInterval)
    })
  return (
    <>
      <StyledBox>
            <StackSpBtn>
            <Typography variant='body2'>Wind</Typography>
            <IconButton><AirIcon fontSize='small'/></IconButton>
            </StackSpBtn>
            <Typography variant='h4' fontWeight='bold' textAlign='center'>8 km/hr</Typography><br/>
            <LinearProgress sx={{height:15 ,borderRadius:5}} variant='determinate' value={progress}/>
          </StyledBox>
    </>
  )
}

export default Wind
