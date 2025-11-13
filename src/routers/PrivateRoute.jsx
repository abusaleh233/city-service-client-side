import React, { useContext } from 'react';
import { AuthContext } from '../conext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { ClimbingBoxLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
    return (
        <div className='h-[97vh] flex justify-center items-center'>
            <ClimbingBoxLoader color="#0000FF" />;
        </div>
        );
    }

    if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;