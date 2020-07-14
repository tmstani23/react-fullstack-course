import React from 'react';
import SideNav from 'react-simple-sidenav';
import Items from './items';

//Main nav containing a sidebar and a list of links within the sidebar
const MainNav = (props) => {
    //Side nav is a dependency component with basic side nav functionality built
    return (
        <SideNav
            // open and close sidebar handled by builtin functionality of SideNav
            // must be passed a true/false generator function
            showNav = {props.showNav}
            onHideNav = {props.onHideNav}
            navStyle={{
                background: '#242424',
                maxWidth: '220px'
            }}
        >
            <Items onHideNav={props.onHideNav}/>
        </SideNav>
    )
}

export default MainNav;