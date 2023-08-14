import React from 'react'
import StyledBox from '../EditedTags/StyledBox'
import StackSpBtn from '../EditedTags/StackSpBtn'
import { IconButton, LinearProgress, Stack, Typography } from '@mui/material'
import { ThunderstormOutlined } from '@mui/icons-material'

const Precipitation = () => {
  return (
    <>
      <StyledBox>
            <StackSpBtn>
            <Typography variant='body2'>Precipitation</Typography>
            <IconButton><ThunderstormOutlined fontSize='small'/></IconButton>
            </StackSpBtn>
            <Typography variant='h4' fontWeight='bold' textAlign='center'>1.4 cm</Typography>
            <Stack direction='row' display='flex' justifyContent='space-around'>
              <Stack direction='column'>
                <Typography variant='body2'>0</Typography>
                <LinearProgress sx={{height:10,width:10 ,borderRadius:5}} variant='determinate' value={100}/>
              </Stack>
              <Stack direction='column'>
                <Typography variant='body2'>10</Typography>
                <LinearProgress sx={{height:10,width:10 ,borderRadius:5}} variant='determinate' value={100}/>
              </Stack>
              <Stack direction='column'>
                <Typography variant='body2'>20</Typography>
                <LinearProgress sx={{height:10,width:10 ,borderRadius:5}} variant='determinate' value={30}/>
              </Stack>
              <Stack direction='column'>
                <Typography variant='body2'>30</Typography>
                <LinearProgress sx={{height:10,width:10 ,borderRadius:5}} variant='determinate' value={0}/>
              </Stack>
              <Stack direction='column'>
                <Typography variant='body2'>40</Typography>
                <LinearProgress sx={{height:10,width:10 ,borderRadius:5}} variant='determinate' value={0}/>
              </Stack>
              <Stack direction='column'>
                <Typography variant='body2'>50</Typography>
                <LinearProgress sx={{height:10,width:10 ,borderRadius:5}} variant='determinate' value={0}/>
              </Stack>
              <Stack direction='column'>
                <Typography variant='body2'>60</Typography>
                <LinearProgress sx={{height:10,width:10 ,borderRadius:5}} variant='determinate' value={0}/>
              </Stack>
              <Stack direction='column'>
                <Typography variant='body2'>70</Typography>
                <LinearProgress sx={{height:10,width:10 ,borderRadius:5}} variant='determinate' value={0}/>
              </Stack>
              <Stack direction='column'>
                <Typography variant='body2'>80</Typography>
                <LinearProgress sx={{height:10,width:10 ,borderRadius:5}} variant='determinate' value={0}/>
              </Stack>
              <Stack direction='column'>
                <Typography variant='body2'>90</Typography>
                <LinearProgress sx={{height:10,width:10 ,borderRadius:5}} variant='determinate' value={0}/>
              </Stack>

            </Stack>

          </StyledBox>
    </>
  )
}

export default Precipitation
