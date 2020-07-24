import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import AdminLayout from '../../../../hoc/admin_layout';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';

const AdminPosts = (props) => {
    
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        // get an array of book objects owned by the current user
        axios.get(`/api/books/all_books?ownerId=${props.user.userData.id}`)
            .then(response => {
                setPosts(response.data)
            })
    }, [props])
    
        //console.log(posts)

    return (
        <AdminLayout>
            {/* material ui responsive table */}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Created On </TableCell>
                            <TableCell>Rating</TableCell>
                        </TableRow>    
                    </TableHead>    
                    <TableBody>
                        {/* loop through posts and display table of post data */}
                        {
                            posts.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        {/* link to the edit page for the post */}
                                        <Link to = {`/admin/posts/edit/${item._id}`}>{item.name}</Link>
                                    </TableCell>
                                    <TableCell>{item.author}</TableCell>
                                    <TableCell>{moment(item.createdAt).format('MM/DD/YY')}</TableCell>
                                    <TableCell>{item.rating}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>    
            </TableContainer>   
        </ AdminLayout >
    )
        
    
}

export default AdminPosts;
