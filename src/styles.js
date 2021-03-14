import styled from "styled-components";
import { motion } from "framer-motion";

export const Sklep = styled(motion.div)``;

export const TopPicture = styled(motion.div)`
  img {
    width: 100%;
    height: 350px;
    object-fit: fill;
    z-index: -1;
    top: 0;
  }
`;

export const Title1 = styled.div`
  font-size: 2rem;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #ececec;
  top: 5vh;
  position: absolute;
`;

export const ArrowImg = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: #ececec;
`;

export const TextHeader = styled.div`
  margin-left: 50px;
  text-decoration: none;
  color: #ececec;
`;

export const FooterPicture = styled.div`
  img {
    width: 100%;
    height: 300px;
    object-fit: fill;
    // left: 0;
    bottom: 0;
  }
`;

export const FooterPictureTop = styled.div`
  img {
    width: 100%;
    height: 300px;
    object-fit: fill;
    top: 0;
    transform: rotateX(180deg);
    // transform: rotateY(180deg);
  }
`;

export const DatePickerStyle = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const FormStyle = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 15px 0px 15px 0px;
  max-width: 500px;
  //border: 2px solid #cecaca;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  box-shadow: 5px 5px 18px #888888;
`;

export const SubmitStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background: linear-gradient(45deg, #e51ead, #e08cc0);
    color: white;
    padding: 7px 15px 7px 15px;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    box-shadow: 5px 3px 8px #888888;
    margin: 10px;
    cursor: pointer;
    outline: none;
  }
  button:hover {
    background: linear-gradient(45deg, #c21a92, #c77dab);
    outline: none;
  }

  button:active {
    background: linear-gradient(45deg, #c21a92, #c77dab);
    box-shadow: 0 5px #666;
    transform: translateY(4px);
    outline: none;
  }
`;

export const FormItemStyle = styled.div`
  font-weight: bold;
  padding-top: 20px;
  display: grid;
  grid-template-columns: 50px 180px 55px 35px 35px 25px;
  column-gap: 10px;
  justify-self: end;
  justify-content: center;
  align-self: center;
  align-content: center;
  img {
    width: 40px;
    border-radius: 45%;
  }
  label {
    padding-left: 0px;
  }
  input {
    margin-left: 0px;
    width: 100%;
  }
  span {
    padding-left: 15px;
  }
`;

export const FormLabel = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  min-width: 400px;
  font-weight: bold;
  color: #656464;
  div {
    display: inline;
    float: right;
  }

  label {
    min-width: 400px;
    cursor: pointer;
  }
  p {
    padding-left: 20px;
    display: inline;
  }
`;

export const FormTopHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  padding-top: 20px;
  p {
    padding-left: 45px;
    padding-right: 20px;
    font-weight: bold;
  }
`;

export const ArrowBackground = styled.div`
  background: linear-gradient(45deg, #5c35b6, #8461c5);
  color: #e8e7e7;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 20px;
`;

export const MainIcon = styled.div`
  color: #e8e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 60%;
`;

export const Icon1 = styled.div`
  background: linear-gradient(45deg, #ffd3a5, #fd6585);
  color: #e8e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 60%;
`;

export const Icon2 = styled.div`
  background: linear-gradient(45deg, #90f390, #33a715);
  color: #e8e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 60%;
`;

export const Icon3 = styled.div`
  background: linear-gradient(45deg, #ffe985, #fa742b);
  color: #e8e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 60%;
`;

export const Icon4 = styled.div`
  background: linear-gradient(45deg, #5efce8, #736efe);
  color: #e8e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 60%;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 190px;
  height: 220px;
  padding: 20px 30px 20px 30px;
  box-shadow: 5px 3px 20px #888888;
  border-radius: 20px;
  justify-content: center;
  align-content: center;
  margin: 20px 20px 20px 20px;
  flex-wrap: wrap;
  cursor: pointer;
  p {
    margin-top: 40px;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
  }
  a {
    text-decoration: none;
    color: black;
    padding: 20px 20px 20px 20px;
  }
  :hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }
  :hover .Icon1 {
    background: linear-gradient(45deg, #edc398, #eb5e7b);
    outline: none;
  }
  :hover .Icon2 {
    background: linear-gradient(45deg, #8ae68a, #2a8c11);
    outline: none;
  }
  :hover .Icon3 {
    background: linear-gradient(45deg, #e6d277, #e06826);
    outline: none;
  }
  :hover .Icon4 {
    background: linear-gradient(45deg, #53e0cf, #6763e6);
    outline: none;
  }

  :active {
    transform: translateY(4px);
    outline: none;
    transition-duration: 1s;
  }
`;

export const MainMenu = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 40%;
  flex-basis: 40%;
  // flex-wrap: wrap;
`;
