import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJs , LineElement , CategoryScale ,  LinearScale , PointElement , Legend , Tooltip,Filler}  from 'chart.js'
import { Box, Chip, Typography } from '@mui/material'
import StyledBox from '../EditedTags/StyledBox'
import 'chartjs-plugin-datalabels';
import StackSpBtn from '../EditedTags/StackSpBtn'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { KeyboardArrowRight } from '@mui/icons-material'
ChartJs.register(LineElement , CategoryScale ,  LinearScale , PointElement , Legend , Tooltip , Filler)   

const DisplayChart = () => {
    const data={
        labels: ['Now' , '11:00' , '12:00' ,  '13:00' , '14:00' , '15:00' , '16:00' , '17:00'],
        datasets: [{
            label:'Range of temperature(C)',
            data:[23 , 29 , 58 ,  75 , 33 , 20 , 73 , 49],
            fill: true,
            backgroundColor: '#5c9ce5',
            borderColor: 'black',
            borderWidth:  1,
           
            pointRadius:0.5,
            
        }]
    }

    const options = {
        maintainAspectRatio:false,
        plugins: {
            legend: true
        },
        scales: {
            x: {
                grid: {
                  display: true,
                  zIndex:1
                },
                // ticks: {
                //   display: false, // Hide default x-axis labels
                // },
              },
            
            y:{
                min:0,
                max:150  ,
            //    display: false,
                grid: {
                    display:false
                }
            },
            
            
        }
        ,
       
    }
  return (
    <>
    <StyledBox>
        <StackSpBtn>
            <Typography variant='body2' >Upcoming hours</Typography>
            <StackSpBtn>
                <Chip label="Rain Precipitation" disabled icon={<KeyboardArrowDownIcon/>}/>
                <Chip label="Next Days" icon={<KeyboardArrowRight/>} />
            </StackSpBtn>
        </StackSpBtn>
        
    <Box sx={{height:180,width:'100%',display:'flex' , justifyContent:'center'}}>
      
      <Line 
        data={data}
        options={options} >

      </Line>
      
      
      </Box>
      </StyledBox>
    </>
  )
}

export default DisplayChart
