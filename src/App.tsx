import './App.css'
import { createTheme, colors, ThemeProvider } from '@mui/material'

import { MuiAccordian } from './components/MuiAccordian'
import { MuiAlert } from './components/MuiAlert'
import { MuiButton } from './components/MuiButton'
import { MuiCard } from './components/MuiCard'
import { MuiCheckbox } from './components/MuiCheckbox'
import { MuiDialog } from './components/MuiDialog'
import { MUILayout } from './components/MUILayout'
import { MuiLink } from './components/MuiLink'
import { MuiList } from './components/MuiList'
import { MuiNavbar } from './components/MuiNavbar'
import { MuiRadioButton } from './components/MuiRadioButton'
import { MuiSelect } from './components/MuiSelect'
import { MuiSnackbar } from './components/MuiSnackbar'
import { MuiSwitch } from './components/MuiSwitch'
import { MuiTextField } from './components/MuiTextField'
import { MuiTypography } from './components/MuiTypography'
import { ReactDatePicker } from './components/ReactDatePicker'
import { ReactColorPicker } from './components/ReactColorPicker'

const theme = createTheme({
  // Items here are structured like the mui docs "Default Theme" page.
  // Click on Expand All to see all overridable settings
  palette: {
    mode: 'light',
    secondary: {
      main: colors.orange[500],
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <MuiNavbar />
        <h4>Layout - Grid, Paper, Box, Stack, Divider</h4>
        <MUILayout />
        <h4>TextField</h4>
        <MuiTextField />
        <h4>Button</h4>
        <MuiButton />
        <h4>Card</h4>
        <MuiCard />
        <h4>List</h4>
        <MuiList />
        <h4>Link</h4>
        <MuiLink />
        <h4>Accordian</h4>
        <MuiAccordian />
        <h4>Switch</h4>
        <MuiSwitch />
        <h4>Checkbox</h4>
        <MuiCheckbox />
        <h4>RadioButton</h4>
        <MuiRadioButton />
        <h4>Select</h4>
        <MuiSelect />
        <h4>Typography</h4>
        <MuiTypography />
        <h4>Dialog box</h4>
        <MuiDialog />
        <h4>Snackbar alert</h4>
        <MuiSnackbar />
        <h4>React DatePicker</h4>
        <ReactDatePicker />
        <h4>React Colorpicker</h4>
        <ReactColorPicker />
        <h4>Alert</h4>
        <MuiAlert />
      </div>
    </ThemeProvider>
  )
}

export default App
