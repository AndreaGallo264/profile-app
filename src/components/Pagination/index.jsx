import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Pagination = ({ page, setPage, showLoader }) => {
    const maxPages = 20;
    const [isFirstPage, setIsFirstPage] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);

    useEffect(() => {
        page === 1 ? setIsFirstPage(true) : setIsFirstPage(false);
        page === maxPages ? setIsLastPage(true) : setIsLastPage(false) ;
    }, [page]);
    
    const PrevPage = () => {
        if (page - 1 > 0) {
            setPage(--page);
        }
    }
    const NextPage = () => {
        if (page + 1 <= maxPages) {
            setPage(++page);
        }
    }

    return (
        <div className='d-flex justify-content-center pagination-block'>
            <div className={isFirstPage && !showLoader ? "btn first-page" : "btn"} onClick={() => PrevPage()}><FontAwesomeIcon icon={faAngleDoubleLeft} /></div>
            <div className='font-weight-bold current-page'>{page}</div>
            <div className={isLastPage && !showLoader ? "btn last-page" : "btn"} onClick={() => NextPage()}><FontAwesomeIcon icon={faAngleDoubleRight} /></div>
        </div>
    );
}

export default Pagination;