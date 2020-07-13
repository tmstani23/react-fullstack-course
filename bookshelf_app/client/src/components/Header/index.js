import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
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
            Nav 
            <Link to='/' className="logo">
                The Book Shelf
            </Link>
        </header>
            
        
    )
}

export default Header;