import React from 'react'

const StyledBox = ({children}) => {
  return (
    <div style={{
        padding: '10px',
        borderRadius : 15,
        backgroundColor: 'white',
        minHeight:'130px',
        '&:hover':{
          borderRadius:'50%'
        },
        
    }}>
      {children}
    </div>
  )
}

export default StyledBox
