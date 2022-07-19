import React from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const MuiList = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 400, bgcolor: '#efefef' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary='List Item 1' secondary='Clickable button' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary='List Item 2' secondary='Now with icons' />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary='List Item 3' secondary='No icon or button' />
        </ListItem>
      </List>
    </Box>
  )
}
