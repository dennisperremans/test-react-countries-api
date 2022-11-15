import React from 'react';
import SwitchTheme from '../../components/SwitchTheme/SwitchTheme';

import '../../assets/css/Header.css';

const header = () => {
  return (
    <header className="primary-header">
        <div className="container">
            <h1 className="title">Where in the world?</h1>

            <SwitchTheme />
        </div>
    </header>
  )
}

export default header