/* eslint-disable react/no-array-index-key */
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PostItemProps from "./postItemType";
import { PaginationStyle, Btn, BtnWrapper } from "./style";

function Pagination({
  data,
  RenderComponent,
  title,
  pageLimit,
  dataLimit,
}: PostItemProps) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  const changePage = (event: any) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit)
      .fill(pageLimit)
      .map((_, idx) => start + idx + 1);
  };

  return (
    <PaginationStyle currentPage={currentPage} pages={pages}>
      <h1>{title}</h1>
      <div className="dataContainer">
        {getPaginatedData().map((d: any, idx: any) => (
          <RenderComponent key={idx} id={d.id} item={d} />
        ))}
      </div>
      <div className="pagination">
        {/* previous button */}
        <button type="button" onClick={goToPreviousPage} className="prev">
          <FaChevronLeft />
        </button>

        {/* show page numbers */}
        <BtnWrapper>
          {getPaginationGroup().map((item, index) => (
            <Btn
              type="button"
              key={index}
              onClick={changePage}
              item={item}
              currentPage={currentPage}
            >
              <span>{item}</span>
            </Btn>
          ))}
        </BtnWrapper>

        {/* next button */}
        <button type="button" onClick={goToNextPage} className="next">
          <FaChevronRight />
        </button>
      </div>
    </PaginationStyle>
  );
}

export default Pagination;
