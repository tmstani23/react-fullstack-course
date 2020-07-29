import React from 'react';
import {Link} from 'react-router-dom';

export default function Admin() {
    return (
        <div className = 'container'>
            <h2>Admin section</h2>
            <div>
                <Link to = {'/register'}>Register User</Link>
            </div>
        </div>
    )
}