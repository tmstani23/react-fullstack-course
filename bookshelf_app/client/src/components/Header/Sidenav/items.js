import React from 'react';
import {Link} from 'react-router-dom';
import {routeLinks} from '../../../utils/route_links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Items = (props) => {

    const element = (item, i) => (
        <div
            key={i} 
            className="navItem"
        >
            <Link 
                to={item.link}
                onClick={props.onHideNav}
            >
                
                <FontAwesomeIcon icon={item.icon} />
                {item.text}
            </Link>

        </div>
    )

    const showAdminLinks = () => (
        //iterate over each object in the route links admin file
        routeLinks.admin.map((item, i) => {
            //return an element with the admin properties (item)
            return (
                element(item, i)
            )
        })
    )

    const showCommonLinks = () => (
        routeLinks.common.map((item, i) => {
            return (
                element(item, i)
            )
            })
    )



    return (
        <div>
            {showCommonLinks()}
            <div>
                <div className="nav_split">
                    Admin Options
                </div>
                {showAdminLinks()}
            </div>
        </div>
    )

}

export default Items;