import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Pagination = ({ page, setPage }) => {
    const maxPages = 20;
    const [isFirstPage, setIsFirstPage] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);


    const PrevPage = () => {
        setIsLastPage(false);
        if (page - 1 > 0) {
            setPage(--page);
            if(page === 1){
                setIsFirstPage(true);
            } else {
                setIsFirstPage(false);
            }
        }
    }
    const NextPage = () => {
        setIsFirstPage(false);
        if (page + 1 <= maxPages) {
            setPage(++page);
            if(page === maxPages){
                setIsLastPage(true);
            } else {
                setIsLastPage(false);
            }
        }
    }
    
    return (
        <div className='d-flex justify-content-center pagination-block'>
            <div className={isFirstPage ? "btn first-page" : "btn"} onClick={ () =>  PrevPage() }><FontAwesomeIcon icon={faAngleDoubleLeft} /></div>
            <div className='font-weight-bold current-page'>{page}</div>
            <div className={isLastPage ? "btn last-page" : "btn"} onClick={ () => NextPage() }><FontAwesomeIcon icon={faAngleDoubleRight} /></div>
        </div>
    );
}

export default Pagination;