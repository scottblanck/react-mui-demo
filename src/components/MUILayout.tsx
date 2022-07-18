import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

export const MUILayout = () => {
  return (
    // Paper notes:
    // Establish sections of UI and hierarchy, default background is white
    // Use padding for space around inside of "card", elevation is for a higher "drop shadow"
    <Paper sx={{ padding: "16px" }} elevation={4}>
      {/* // Stack notes - row or column, spacing is * 8px */}
      <Stack
        sx={{ border: "1px solid", padding: "16px" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {/* Box notes: Used for easy CSS styling, often easier for quick changes. The "MUI way". */}
        {/* See the MUI docs - System properties page for all props and MUI shortcuts vs CSS */}
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          MUILayout.tsx - Box components
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px" // See MUI system docs - properties page - for all properties reference table
          bgcolor="success.light" // some props have shortcut spellings
          p={2} // shortcut for padding, integer value * 8 pixels
        ></Box>
      </Stack>
      {/* Grid container notes: */}
      {/* spacing={2} prop will add space between items */}
      {/* Can set separate column and row spacing with rowSpacing and columnSpacing props */}
      <Grid container my={4}>
        {/* Grid item notes: */}
        {/* 12 total spaces to work with, can set mobile and tablet sizes like this, will flex. Awesome! */}
        {/* Available props are xs mobile, sm tablet, md desktop, lg, lx for larger monitors */}
        {/* Can also specify just the prop alone 'xs' for equal spacing over 12 spaces*/}
        {/* Can specify xs='auto' to shrink to only the needed space for component or text*/}
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
