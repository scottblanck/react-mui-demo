import './App.css'
import { MuiAccordian } from './components/MuiAccordian'

import { MuiButton } from './components/MuiButton'
import { MuiCard } from './components/MuiCard'
import { MuiCheckbox } from './components/MuiCheckbox'
import { MUILayout } from './components/MUILayout'
import { MuiLink } from './components/MuiLink'
import { MuiNavbar } from './components/MuiNavbar'
import { MuiRadioButton } from './components/MuiRadioButton'
import { MuiSelect } from './components/MuiSelect'
import { MuiSwitch } from './components/MuiSwitch'
import { MuiTextField } from './components/MuiTextField'
import { MuiTypography } from './components/MuiTypography'

function App() {
  return (
    <div className='App'>
      <MuiNavbar />
      <MuiLink />
      <MuiAccordian />
      <MuiCard />
      <MUILayout />
      <MuiSwitch />
      <MuiCheckbox />
      <MuiRadioButton />
      <MuiSelect />
      <MuiTextField />
      <MuiButton />
      <MuiTypography />
    </div>
  )
}

export default App
