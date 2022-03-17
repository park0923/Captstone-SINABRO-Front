import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div>
        <nav>
          <div className="justify-center flex flex-row space-x-2">
            {pageNumbers.map((number) => (
              <div key={number}>
                <button onClick={() => paginate(number)} className="h-8 w-8 p-1 hover:bg-gray-300 rounded font-sebang-gothic">
                  {number}
                </button>
              </div>
            ))}
          </div>
        </nav>
      </div>
    );
  };
  
  export default Pagination;