import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const ProfileCard = ({ profile }) => {

    return (
        <Card className='profile-card p-2 m-2'>
            <Card.Img variant="top" src={profile.picture.large} alt={profile.name.first} />
            <Card.Body>
                <Card.Title className='text-center'>{profile.name.first} {profile.name.last}</Card.Title>
                <Card.Text className='text-center'>
                    {profile.location.city}, {profile.location.country}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-center'>
                <Link to={{
                    pathname: `/profiles/${profile.name.first}${profile.name.last}`,
                    state: {
                        profile
                    }
                }}>
                    <Button variant="primary justify-content-center"><FontAwesomeIcon icon={faPlus} /> View details</Button>
                </Link>
            </Card.Footer>
        </Card>
    );
}

export default ProfileCard;