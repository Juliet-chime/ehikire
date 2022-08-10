import styled from "styled-components";
import { AppContextType } from "../../context";

export const SideBarWrapper = styled.div<AppContextType>`
  border: solid green;
  z-index: 1;
  overflow: hidden;
  height: 100%;
  width: ${(props) => (props.active ? "281px" : "0%")};
  @media (max-width: 768px) {
  }
`;

export default {};
