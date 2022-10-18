import React from 'react'
import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

export const MuiSelect = () => {
  const [country, setCountry] = useState('')
  console.log({ country })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string)
  }

  // const handleChangeJSX = (event) => {
  //   setCountry(event.target.value)
  // }

  return (
    <div>
      <Box width='250px'>
        <TextField
          label='Select Country'
          select
          value={country}
          onChange={handleChange}
          fullWidth
          //   can also use same props as TextField for styling, see other component
        >
          <MenuItem value='IN'>India</MenuItem>
          <MenuItem value='US'>USA</MenuItem>
          <MenuItem value='AU'>Austrailia</MenuItem>
        </TextField>
      </Box>
      <br></br>
    </div>
  )
}
