import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardDeck } from 'react-bootstrap';

//components
import ProfileCard from '../ProfileCard';
import Pagination from '../Pagination';

const ProfileList = () => {
    const [page, setPage] = useState(1);
    const [profiles, setProfiles] = useState([]);

    const getProfilesPage = page => {
        axios.get(`https://randomuser.me/api/?page=${page}&results=20&seed=abc`)
            .then(response => {
                setProfiles(response.data.results);
            });
    }

    useEffect(() => {
        getProfilesPage(1);
    }, []);

    useEffect(() => {
        getProfilesPage(page);
    }, [page]);

    return (
        <div className='container pt-5'>
            <CardDeck>
                {
                    profiles.map(profile => (
                        <ProfileCard
                            key={profile.cell}
                            profile={profile}
                        />
                    ))
                }
            </CardDeck>
            <Pagination
                page={page}
                setPage={setPage}
            />
        </div>
    );
}

export default ProfileList;