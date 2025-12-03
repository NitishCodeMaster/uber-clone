import React, { use, useContext, useEffect, useState } from 'react'
import CaptainDataContext from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
            return;
        }
        axios.get(`${import.meta.env.VITE_API_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setCaptain(response.data.captain);
                setIsLoading(false);
            }
        }).catch(error => {
            console.error('Error fetching captain profile:', error);
            localStorage.removeItem('token');
            navigate('/captain-login');
        });
    }, [token]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>{children} </>
    )
}

export default CaptainProtectWrapper;