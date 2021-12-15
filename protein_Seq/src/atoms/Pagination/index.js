import React, { useEffect } from "react";

// import styles from "./TableFooter.module.css";

const Pagination = ({ range, setPage, page, slice }) => {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);
    return (

        <ul className="pagination">
            {range.map((el, index) => (
                <li
                    key={index}
                    className="page-item"
                    onClick={() => setPage(el)}
                >
                    <a className="page-link" href="#">
                        {el}
                    </a>

                </li>
            ))}
        </ul>
    );
};

export default Pagination;