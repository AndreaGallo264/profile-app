import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { CardDeck } from 'react-bootstrap';

//components
import ProfileCard from '../ProfileCard';
import Pagination from '../Pagination';
import ErrorBlock from '../Error';
import Loader from '../Loader';

const ProfileList = () => {
    const [page, setPage] = useState(1);
    const [profiles, setProfiles] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [showLoader, setLoader] = useState(true);

    const getProfilesPage = async (page) => {
        setLoader(true);
        await axios.get(`https://randomuser.me/api/?page=${page}&results=20&seed=abc`)
            .then(response => {
                setProfiles(response.data.results);
                setTimeout(() => {
                    setLoader(false); 
                }, 1000);
            })
            .catch(e => {
                setHasError(true);
                console.log(e);
                setErrorMsg("Try again. Go home!");
            })

    }

    useEffect(() => {
        getProfilesPage(page);
    }, [page]);


    return (
        <Fragment>
            {
                showLoader ?
                <div className="container d-flex justify-content-center align-items-center vh-100">
                    <Loader/> </div>
                    :
                    <Fragment>
                        {
                            hasError ?
                                <ErrorBlock
                                    errorMsg={errorMsg}
                                />
                                :
                                <div className='container py-3'>
                                    <Pagination
                                        page={page}
                                        setPage={setPage}
                                        showLoader = {showLoader}
                                    />
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
                        }
                    </Fragment>
            }
        </Fragment>
    );
}

export default ProfileList;