import React, {Fragment} from 'react';

const PostItem = (props) => {
    console.log(props)
    return (
        <Fragment>
            <div>{props.match.params.id}</div>
        </Fragment>
    )
}

export default PostItem;