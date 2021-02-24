import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const ProfileCard = ({ profile }) => {
    return (
        <Card className='profile-card p-2 m-2'>
            <div className="flip-card p-2">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <Card.Img variant="top" className='rounded-circle' src={profile.picture.large} alt={profile.name.first} />
                    </div>
                    <div className="flip-card-back">
                        <Card.Body>
                            <Card.Title className='text-center font-weight-bold'>{profile.name.first} {profile.name.last}</Card.Title>
                            <Card.Text className='text-center'>
                                {profile.location.city}, {profile.location.country}
                            </Card.Text>
                            <Card.Img variant="top" className='rounded-circle mb-2' src={profile.picture.thumbnail} alt={profile.name.first} />
                        </Card.Body>
                    </div>
                </div>
            </div>
            <Link to={{
                pathname: `/profiles/${profile.name.first}${profile.name.last}`,
                state: {
                    profile
                }
            }}>
                <Card.Footer className='d-flex justify-content-center font-weight-bold'>
                    <FontAwesomeIcon icon={faPlus} className='mr-3' /> View details
                </Card.Footer>
            </Link>
        </Card>
    );
}

export default ProfileCard;