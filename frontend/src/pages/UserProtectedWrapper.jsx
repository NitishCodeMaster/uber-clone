import React, { use, useContext, useEffect } from 'react'
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const { user } = useContext(userDataContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!token || !user) {
            navigate('/login');
        }
    }, [token, user]);

    return (
        <div>{children} </div>
    )
}

export default UserProtectedWrapper