import React from 'react';
import ErrorImg from '../../img/errorPageImg.png';
import {Image, Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './style.css';


const Error = ({errorMsg = "Something went terribly wrong! We are sorry"}) => {
    return ( 
        <Container className='d-flex justify-content-center flex-column align-items-center p-5'>
            <Image className='mb-4 rounded' src={ErrorImg}/>
            <h1 className='error-message'>{errorMsg}</h1>
            <Link to='/' className='mt-3'>
                <Button className='error-btn font-weight-bold' size="lg">Home</Button>
            </Link>

        </Container>
    );
}
 
export default Error;