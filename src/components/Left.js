import { Stack, Switch, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import StackSpBtn from '../EditedTags/StackSpBtn';


const Left = () => {
    let value =  27
    let[degree , setDegree] = useState(value)
    let[checked, isChecked] = useState(false)
    const setChecked =() =>{
        isChecked(!checked)
    }
    useEffect(() =>{
        const animate = setInterval(() =>{
            if(checked) {setDegree(value*(9/5)+32)}
            else{setDegree(value)}
        },100)
        return ()=>clearInterval(animate)
    })
    
  return (
    <>
        <br/><br/>
        <StackSpBtn>
            <AddBoxIcon/>
            <AddBoxIcon/>
            <Stack direction='row'>
                <Typography variant='caption'>&deg;C</Typography>
                <Switch checked={checked} onClick={setChecked} />
                <Typography variant='caption'>&deg;F</Typography>
            </Stack>
        </StackSpBtn>
        <br/>

        <StackSpBtn>
            <Typography variant='body1'>New York , USA</Typography>
            <Typography variant='body2'>07:19</Typography>
        </StackSpBtn>
        <StackSpBtn>
            <Typography variant='caption'>Today 28 Sept</Typography>
            <Typography variant='body2'>19:32</Typography>
        </StackSpBtn>

        <br/>

        <StackSpBtn>
            <ArrowBackIosIcon/>
            <Stack direction='column' >
                <Typography variant='h3' textAlign='center' ml={4}>{degree}&deg;</Typography>
                <Typography variant='body1' justifyContent='center' display='flex' alignItems='center'><WbSunnyOutlinedIcon/>&nbsp;Sunny</Typography>
            </Stack>
                        
            <ArrowForwardIosIcon/>
        </StackSpBtn>
      
    </>
  )
}

export default Left
