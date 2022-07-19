import React from 'react'
import ChromePicker from 'react-color'
import { useState } from 'react'

export const ReactColorPicker = () => {
  const [color, setColor] = useState('#fff')
  const [showColorPicker, setShowColorPicker] = useState(false)

  // Note the react-color package includes several styles of color picker
  // See docs for examples

  return (
    <div>
      <button
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }
      >
        {showColorPicker ? 'Close color picker' : 'Pick a color'}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}
      <br></br>
      <body>You picked {color}</body>
    </div>
  )
}
