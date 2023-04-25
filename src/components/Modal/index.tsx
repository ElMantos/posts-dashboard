import { FC, ReactNode } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(79, 83, 89, 0.5);
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border: 1px solid #c0d6fa;
  background-color: #e6efff;
  border-radius: 8px;
  padding: 24px;
`;

interface ModalProps {
    onClose: () => void;
    // React 18+ does not define children by default in FC interface ;)
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  return (
    <Backdrop>
      <Content><OutsideClickHandler onOutsideClick={onClose}><Card>{children}</Card></OutsideClickHandler></Content>
    </Backdrop>
  );
};

export default Modal;
