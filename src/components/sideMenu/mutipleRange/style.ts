import styled from "styled-components";

export const MutilpleRangeWrapper = styled.div`
  color: #2c2c2c;
  font-family: "Montserrat", sans-serif;
  margin: 40px 0px;
  h1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 10px;
  }
  label {
    font-weight: 300;
    font-size: 16px;
    line-height: 32px;
  }
  input {
    &:checked {
      background-color: red;
    }
  }
`;

export const Range = styled.div``;
