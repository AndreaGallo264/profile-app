import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfileDetail = () => {
    const location = useLocation();
    const detail = location.state.profile;
    console.log(detail);
    return (
        <div>
            <img src={detail.picture.large} alt={detail.name.first} />
            <p>{detail.name.first}</p>
        </div>
    );
}

export default ProfileDetail;