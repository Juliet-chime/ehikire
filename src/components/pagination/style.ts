import styled from "styled-components";
import PostItemProps from "./postItemType";

export const PaginationStyle = styled.div<PostItemProps>`
  .dataContainer {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 74px;
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 28px;
  }
  .prev {
    background-color: ${(props) => (props.currentPage === 1 ? "" : "#F9D342")};
    border: none;
    padding: 10px;
    color: ${(props) => (props.currentPage === 1 ? "#999" : "black")};
    box-shadow: ${(props) =>
      props.currentPage === 1 ? "" : "0 0 3px rgba(0, 0, 0, 0.4)"};
    margin: 0px 10px;
    cursor: pointer;
    pointer-events: ${(props) => (props.currentPage === 1 ? "none" : "")};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .next {
    background-color: ${(props) =>
      props.currentPage === props.pages ? "" : "#F9D342"};
    border: none;
    padding: 10px;
    color: ${(props) => (props.currentPage === props.pages ? "#999" : "black")};
    box-shadow: ${(props) =>
      props.currentPage === props.pages ? "" : "0 0 3px rgba(0, 0, 0, 0.4)"};
    margin: 0px 10px;
    cursor: pointer;
    pointer-events: ${(props) =>
      props.currentPage === props.pages ? "none" : ""};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BtnWrapper = styled.div<PostItemProps>`
  background: #ededed;
  border-radius: 20px;
`;

export const Btn = styled.button<PostItemProps>`
  background: ${(props) =>
    props.currentPage === props.item ? "#F9D342" : "transparent"};
  padding: 10px 15px;
  width: ${(props) => (props.currentPage === props.item ? "40px" : "")};
  height: ${(props) => (props.currentPage === props.item ? "40px" : "")};
  border-radius: ${(props) => (props.currentPage === props.item ? "50%" : "")};
  position: relative;
  cursor: pointer;
  color: ${(props) => (props.currentPage === props.item ? "white" : "")};
  border: ${(props) =>
    props.currentPage === props.item ? "1px solid #F9D342" : "none"};
  pointer-events: ${(props) =>
    props.currentPage === props.item ? "none" : ""};
`;
