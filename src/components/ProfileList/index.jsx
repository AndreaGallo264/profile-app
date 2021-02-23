import React, { useState, useEffect } from 'react';
import axios from 'axios';

//components
import ProfileCard from '../ProfileCard';

const ProfileList = () => {
    const [page, setPage] = useState(1);
    const [profiles, setProfiles] = useState([]);

    const getProfilesPage = page => {
        axios.get(`https://randomuser.me/api/?page=${page}&results=20&seed=abc`)
            .then(response => {
                setProfiles(response.data.results);
            });
    }

    useEffect(page => {
        getProfilesPage(page);
    }, []);

    return (
        <div>
            <h1>Profile list</h1>
            {
                profiles.map(profile => (
                    <ProfileCard
                    key={profile.cell}
                    profile = {profile}
                    />
                ))
            }
        </div>
    );
}

export default ProfileList;