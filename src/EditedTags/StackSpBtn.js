import { Stack } from '@mui/material'
import React from 'react'

const StackSpBtn= ({children}) => {
  return (
    <Stack direction='row' spacing={1} display='flex' alignItems='center' justifyContent='space-between' px={2}>
        {children}
    </Stack>
  )
}

export default StackSpBtn
