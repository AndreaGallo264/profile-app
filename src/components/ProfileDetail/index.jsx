import React from 'react';
import { useLocation } from 'react-router-dom';
import { Image, Container, Col, Row } from 'react-bootstrap';
import './style.css';
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faMobileAlt, faPhone, faUser, faAt } from '@fortawesome/free-solid-svg-icons';

const ProfileDetail = () => {
    const location = useLocation();
    const detail = location.state.profile;
    return (
        <Container className='p-0 w-100 profile-detail-card mt-5 rounded'>
            <Col xs={12}>
                <Row className="p-3 header-profile-detail">
                    <h1 className='text-center'> {detail.name.title}. {detail.name.first} {detail.name.last}</h1>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <Row className='p-3'>
                            <Image src={detail.picture.large} alt={detail.name.first} fluid className='w-100 rounded-circle' />
                        </Row>
                    </Col>
                    <Col xs={12} md={8} className='p-3 pl-5 profile-detail-data d-flex justify-content-center align-items-start flex-column'>
                        <p><FontAwesomeIcon icon={faUser} className='text-weight-bold' /> {detail.login.username}</p>
                        <p><FontAwesomeIcon icon={faAt} className='text-weight-bold' /> {detail.email}</p>
                        <Row className='w-100 text-left'>
                            <Col xs={12} md={6}>
                                <p><FontAwesomeIcon icon={faMobileAlt} className='text-weight-bold' /> {detail.cell}</p>
                            </Col>
                            <Col xs={12} md={6}>
                                <p><FontAwesomeIcon icon={faPhone} className='text-weight-bold' /> {detail.phone}</p>
                            </Col>
                        </Row>
                        <p><FontAwesomeIcon icon={faMapMarker} className='text-weight-bold' /> {detail.location.street.name} {detail.location.street.number}, {detail.location.city}, {detail.location.country} (P.C. {detail.location.postcode})</p>
                    </Col>
                </Row>
            </Col>
        </Container>
    );
}

export default ProfileDetail;