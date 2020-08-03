import React from 'react';
import {Link} from 'react-router-dom';
import DeleteUser from './Users/delete_user';
import AdminLayout from '../../../hoc/admin_layout';

export default function Admin() {
    return (
            <AdminLayout>
                <h2>Admin section</h2>
                <Link className="conf_link" to = {'/register'}>Register User</Link>
                <DeleteUser />
                
            </AdminLayout>
    )
}