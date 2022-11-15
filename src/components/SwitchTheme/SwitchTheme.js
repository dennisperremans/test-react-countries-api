import React, { useState } from 'react'

function SwitchTheme() {

  const [lightTheme, setLightTheme] = useState(false);

  const switchTheme = () => {
    document.body.classList.toggle('light');
    setLightTheme(!lightTheme);
  }

  return (
    <button className="btn btn-switch" onClick={switchTheme}>
        {(() => {
        if (lightTheme) {
          return (
            <div><i className="fa-solid fa-moon icon"></i> Dark mode</div>
          )
        } else {
          return (
            <div><i className="fa-solid fa-moon icon"></i> Light mode</div>
          )
        }
      })()}
    </button>
  )
}

export default SwitchTheme