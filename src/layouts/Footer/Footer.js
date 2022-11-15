import React from 'react';
import '../../assets/css/Footer.css';

const footer = () => {
  return (
    <footer className="primary-footer">
        <div className="container">
            Copyright &copy; {new Date().getFullYear()} - Dennis Perremans
        </div>
    </footer>
  )
}

export default footer