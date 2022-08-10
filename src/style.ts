import styled from "styled-components";
import { AppContextType } from "./context";

export const BodyWrapper = styled.div`
  padding: 210px 74px 0px 74px;
  @media (max-width: 768px) {
    padding: 170px 0px 0px 0px;
  }
`;

export const PageWrapper = styled.div`
  border: solid red;
  /* height: 100vh; */
  position: relative;
  display: flex;
`;

export const FullBarStyle = styled.div<AppContextType>`
  width: 100%;
  border: solid blue;
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.active ? "0px" : "0px")};
`;
