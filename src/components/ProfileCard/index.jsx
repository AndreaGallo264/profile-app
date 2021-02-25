import React from 'react';
import { Link } from 'react-router-dom';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './style.css';

const ProfileCard = ({ profile }) => {
    return (
        <Card className='profile-card m-2 flip-card'>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Card.Img variant="top" src={profile.picture.large} alt={profile.name.first} />
                </div>
                <div className="flip-card-back">
                    <Card.Body>
                        <Card.Title className='text-center font-weight-bold'>{profile.name.first} {profile.name.last}</Card.Title>
                        <Card.Text className='text-center'>
                            {profile.location.city}, {profile.location.country}
                        </Card.Text>
                        <Link activeClassName="active" to={{
                            pathname: `/profiles/${profile.name.first}${profile.name.last}`,
                            state: {
                                profile
                            }
                        }}>
                            <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                        Click for more info
                                        </Tooltip>
                                }>
                                <Card.Img variant="top" className='rounded-circle mb-2' src={profile.picture.thumbnail} alt={profile.name.first} />
                            </OverlayTrigger>
                        </Link>
                    </Card.Body>
                </div>
            </div>
        </Card >
    );
}

export default ProfileCard;