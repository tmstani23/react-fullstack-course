import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MainNav from './Sidenav/side_nav';

const Header = (props) => {
    //mainNav holds the state object and setMainNav is a function for updating state
    let [mainNav, setMainNav] = useState(false);

    const onShowNav = () => {
        console.log('show nav true')
        setMainNav(true);
    }
    const onHideNav = () => {
        setMainNav(false);
    }
    
    return (
        <header>
            <div className='open_nav'>
                {/* dropdown icon shows the sidebar on click*/}
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={()=> onShowNav(true)}
                    style={{
                        color: '#fffffff',
                        padding: '10px',
                        cursor: 'pointer',
                        fontSize: '25px'
                    }}
                />
            </div>
            {/* main nav containts the sidebar and link items.   */}
            <MainNav 
                // mainNav hooks state contains the current true/false values of hideNav function.  Hidenav calls the hooks setMainNav function to manipulate the state between true/false to show the nav
                showNav={mainNav}
                onHideNav={() => onHideNav(false)}
            />
            <Link to='/' className="logo">
                The Book Shelf
            </Link>
        </header>
            
        
    )
}

export default Header;