// src/components/Modal.tsx
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { FaRegWindowClose } from "react-icons/fa";
import { DynamicForm } from '@/containers/DyFormRender/DyFormRender';


const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: "400px";
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow: scroll;
  height: 350px;
  min-width:300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
`;

const closeButtonCss = css`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: flex-end
    `
const buttonStyleCss=css`
    display:flex;
    position:fixed;
    align-items:center;
    gap:5px;

`

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  fieldSlug:any;
  fieldValue:any
  apiName?:string |any
  currentModel?:string | any
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children ,fieldSlug,fieldValue,apiName,currentModel}) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <div className={closeButtonCss}>
        <button className={buttonStyleCss} onClick={onClose}>Close <FaRegWindowClose/></button>

        </div>
        <DynamicForm fieldSlug={fieldSlug} fieldValue={fieldValue} apiName={apiName} currentModel={currentModel}/>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
