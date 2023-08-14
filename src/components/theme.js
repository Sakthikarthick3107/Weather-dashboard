import { createTheme } from "@mui/material";



const theme = createTheme({
    palette: {
        primary: {
            main: '#5c9ce5'
        }
    },
    components: {
        MuiSwitch: {
            styleOverrides: {
              track: {
                backgroundColor: 'white', 
              },
              
          },
    },
    MuiGrid: {
        styleOverrides: {
            item:  {
                minHeight:  100,
                minWidth : 50,
                
            }
        }
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
                color: 'white',
                padding: 2,
                backgroundColor: '#5c9ce5',
                width: 25,
                height:25,
                borderRadius : 5,
                ":hover":{
                    color: 'white',
                    backgroundColor: '#5c9ce5',
                    
                }
            }
        }
    },
    MuiChip: {
        styleOverrides: {
            root:  {
                cursor:'pointer',
                transform: 'scale(1)',
                transition: 'transform 0.3s ease-in-out',

                '&:hover': {
                    transform: 'scale(1.05)',
                },
            }
        }
    },
    
}})


export default theme