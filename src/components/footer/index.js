import React from 'react';

import './style.css';

function Footer() {
    return (
        <div>
            <footer className='footer'>
                <p className='footerText'>Made By <a href='https://github.com/Faduma92' className='logo' target='_blank' rel='noopener noreferrer'>Faduma Abdillahi</a></p>
                <p className='footerText'>Created using <a href='https://reactjs.org/' className='reactLink' target='_blank' rel='noopener noreferrer'>React</a></p>
            </footer>
        </div>
    )
}

export default Footer;