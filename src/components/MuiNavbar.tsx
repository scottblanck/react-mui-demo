import React from 'react'

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from '@mui/material'
import { CatchingPokemon, KeyboardArrowDownRounded } from '@mui/icons-material'
import { useState } from 'react'

// Navbar with logo and
export const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position='absolute'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CatchingPokemon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography>
        <Stack direction='row' spacing={1}>
          {/* Normally you would add the onClick handler to these buttons to navigate to pages */}
          <Button color='inherit'>Features</Button>
          <Button color='inherit'>Pricing</Button>
          <Button color='inherit'>About</Button>
          {/* Menu button code with two options - Blog and Podcast */}
          <Button
            color='inherit'
            id='resources-button'
            onClick={handleClick}
            endIcon={<KeyboardArrowDownRounded />}
            aria-controls={open ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            Resources
          </Button>

          <Button color='inherit'>Login</Button>
        </Stack>
        <Menu
          id='resources-menu'
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{ 'aria-labelledby': 'resources-button' }}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {/* Normally onClick would not simply close, this is demo only */}
          <MenuItem onClick={handleClose}>Blog </MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
