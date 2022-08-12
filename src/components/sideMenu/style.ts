import styled from "styled-components";
import { AppContextType } from "../../context";

export const SideBarWrapper = styled.div<AppContextType>`
  padding: 20px 30px;
  z-index: 1;
  overflow: hidden;
  height: auto;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  width: ${(props) => (props.active ? "281px" : "0%")};
  .timesicon {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      justify-content: flex-end;
      font-size: 20px;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 768px) {
  }
`;

export default {};
