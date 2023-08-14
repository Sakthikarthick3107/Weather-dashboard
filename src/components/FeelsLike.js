import React,{useState , useEffect} from 'react'
import StyledBox from '../EditedTags/StyledBox'
import StackSpBtn from '../EditedTags/StackSpBtn'
import { IconButton, LinearProgress, Typography } from '@mui/material'
import { DeviceThermostatOutlined } from '@mui/icons-material'

const FeelsLike = () => {
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
            <Typography variant='body2'>Feels like</Typography>
            <IconButton><DeviceThermostatOutlined fontSize='small' /></IconButton>
            </StackSpBtn>
            <Typography variant='h4' fontWeight='bold' textAlign='center'>30&deg;</Typography><br/>
            <LinearProgress sx={{height:15 ,borderRadius:5}} variant='determinate' value={value}/>
          </StyledBox>
    </>
  )
}

export default FeelsLike
