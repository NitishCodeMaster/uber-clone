import React, { useContext, useEffect, useState } from 'react'
import  userDataContext  from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const { user, setUser } = useContext(userDataContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (!token || !user) {
            navigate('/login');   
        }
        axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setUser(response.data.user);
                setIsLoading(false);
            }
        }).catch(error => {
            console.error('Error fetching user profile:', error);
            localStorage.removeItem('token');
            navigate('/login');
        });
    }, [token, user]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>{children} </div>
    )
}

export default UserProtectedWrapper