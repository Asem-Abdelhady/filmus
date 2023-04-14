import React from "react";
import Pagination from "@material-ui/lab/Pagination";


export default function CustomPagination({ setPage, curPage, numOfPages = 10 }) {
  // Scroll to top when page changes
  const handlePageChange = (page: string) => {
    setPage(parseInt(page));
    window.scroll(0, 0);
  };


  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: 10,
      }}
    >

    <Pagination
        onChange={(e) => handlePageChange((e.target as HTMLElement).textContent)}
        count={numOfPages}
        page={curPage}
        color="primary"
        hideNextButton
        hidePrevButton
    />
    </div>
  );
}