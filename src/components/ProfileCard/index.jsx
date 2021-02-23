import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = ({profile}) => {

    return (
        <div>
            <img src={profile.picture.thumbnail} alt={profile.name.first} />
            <p>{profile.name.first}</p>
            <Link to={{
                pathname: `/profiles/${profile.name.first}${profile.name.last}`,
                state: {
                    profile
                }
            }}>
                <button>
                    ver detalle
                </button>
            </Link>
        </div>
    );
}

export default ProfileCard;