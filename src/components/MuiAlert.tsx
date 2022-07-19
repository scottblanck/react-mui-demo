import React from 'react'
import { Alert, Stack, AlertTitle } from '@mui/material'
export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity='error' onClose={() => alert('Close alert')}>
        This is an error alert. (default)
      </Alert>
      <Alert severity='warning'>
        <AlertTitle>Title optional</AlertTitle>This is a warning alert.
      </Alert>
      <Alert severity='info' variant='filled'>
        This is an info alert. (filled)
      </Alert>
      <Alert severity='success' variant='outlined'>
        This is a success alert. (outlined)
      </Alert>
    </Stack>
  )
}
