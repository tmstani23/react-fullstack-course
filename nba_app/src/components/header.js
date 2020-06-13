import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header>
        <div className="container">
            <div className='row'>
                <div className='three columns'>
                    <Link to='/' className='logo'>
                        <span></span>
                    </Link>
                </div>
                <div className='nine columns'>
                    <Link to='/teams'>
                        Teams
                    </Link>
                </div>
            </div>
        </div>
    </header>
)

export default Header;