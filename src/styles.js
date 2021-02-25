import styled from "styled-components";
import { motion } from "framer-motion";

export const Sklep = styled(motion.div)``;

export const TopLine = styled(motion.div)`
  width: 100%;
  height: 9vh;
  object-fit: cover;
  background: linear-gradient(45deg, #4a1bb5, #6b18a4);
  z-index: 1;
  top: 0;
  position: fixed;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.267);
`;

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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #ececec;
  top: 5vh;
  position: fixed;
`;

export const ArrowImg = styled.div`
  cursor: pointer;
`;

export const TextHeader = styled.div`
  margin-left: 50px;
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

export const DatePickerStyle = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

export const AccordionStyle = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

export const FormItemStyle = styled.div`
  img {
    width: 40px;
    border-radius: 45%;
  }
`;
