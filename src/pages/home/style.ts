import styled from "styled-components";
import banner from "../../assest/images/picture/banner.png";

const BannerWrapper = styled.section`
  background-image: url(${banner});
  height: 55vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

export default BannerWrapper;
