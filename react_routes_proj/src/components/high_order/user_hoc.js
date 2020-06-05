import React, { Fragment } from 'react';

//Component returns any component that is passed as an argument
const UserHoc = (WrappedComponent, WrappedComponent2, arg1) => {
    
    //When returning components the return must be a function
    return (props) => (
      <Fragment>
          {/* props are available here */}
          {arg1}
          <WrappedComponent {...props}/>
          <WrappedComponent2/>
      </Fragment>
    ); 
}

export default UserHoc;