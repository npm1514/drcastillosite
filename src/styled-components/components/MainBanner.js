import styled from 'styled-components';
export const MainBanner = styled.div`
  width: 100vw;
  height: 50vw;
  max-height: 400px;
  min-height: 350px;
  background-image: ${props => `url("${props.img}")`};
  background-size: cover;
  background-position: ${props => props.bgPosSmall || "center"};
  position: relative;
  @media(min-width: 700px){
    background-position: ${props => props.bgPos || "center"};
  }
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);
`;


export const TextGroup = styled.div`
  position: absolute;
  z-index: 10;
  left: 12px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.textLeft ? "flex-start" : "flex-end"};
  justify-content: flex-end;
  h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    color: #0c809c;
    padding: 24px 20px;
    background-color: rgba(255, 255, 255, 0.8);
    width: calc(100% - 24px - 40px);
    margin: 0;
    margin-bottom: 8px;
  }
  h3 {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 18px;
    color: #0c809c;
    padding: 12px 18px;
    background-color: rgba(255, 255, 255, 0.8);
    width: calc(100% - 24px - 36px);
    margin: 0;
  }
  @media(min-width: 700px){
    left: ${props => props.textLeft ? "30px" : "initial"};
    right: ${props => props.textLeft ? "initial" : "30px"};
    h2 {
      width: max-content;
      font-size: 36px;
    }
    h3 {
      width: max-content;
      font-size: 20px;
    }
  }
`;
