import React from "react";
import "./Pagination.css";

export default function Pagination({ data, page, newPage, loading }) {
  return (
    <div id="pagination" className="paginationRow paginationHeader">
      <div className="paginationLeft">
        {data.info.pages} pages ({data.info.count} items)
      </div>
      <div className="paginationRight">
        {data.info.prev === null ? (
          <button className="button" disabled>
            Prev
          </button>
        ) : (
          <button
            className="button pointer"
            onClick={() => newPage(page - 1)}
            disabled={loading ? "disabled" : null}
          >
            Prev
          </button>
        )}

        <span className="paginationPageCounter">{page}</span>

        {data.info.next === null ? (
          <button className="button" disabled>
            Next
          </button>
        ) : (
          <button
            className="button pointer"
            onClick={() => newPage(page + 1)}
            disabled={loading ? "disabled" : null}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
