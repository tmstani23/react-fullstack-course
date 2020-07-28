import React from 'react';
import {Link} from 'react-router-dom';
import {routeLinks} from '../../../utils/route_links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux';

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
            //If the user is already logged in 
                //don't show login link else show it
            if(props.user.auth && item.restricted === true) {
                return null;
            }
            
            else {
                return (
                    element(item, i)
                )
            }
        })
    )

    return (
        <div>
            {showCommonLinks()}
            {/* If the user is authorized show admin options links on sidebar */}
            {
                props.user.auth 
                    ?   <div>
                            <div className="nav_split">
                                Admin Options
                            </div>
                            {showAdminLinks()}
                        </div>
                    :   null 
            }
            
        </div>
    )

}

function mapStateToProps(state) {
    return {
        user: state.user
    }
        
}

export default connect(mapStateToProps)(Items);