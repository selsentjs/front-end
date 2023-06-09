import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination pagination-lg">
        {pageNumbers.map((number) => {
          return (
            <>
              <li key={number} className="page-item">
                <a onClick={() => paginate(number)} href='#' className="page-link">
                  {number}
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
