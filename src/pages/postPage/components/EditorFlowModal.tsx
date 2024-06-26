import styled from '@emotion/styled';
import { useRef, Dispatch, SetStateAction, useState } from 'react';

import { AlertStorageIcn, AlertUploadIcn, AlertCautionIcn } from '../../../assets/svgs/editorSVG';
import Spacing from '../../../components/commons/Spacing';
import useClickOutside from '../../../hooks/useClickOutside';

interface editorFlowModalType {
  title: string;
  leftBtnText: string;
  leftBtnFn: () => void;
  rightBtnText: string;
  rightBtnFn: () => void;
  modalImgType: string;
}

interface EditorFlowModalPropsType {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  editorFlowModalContent: editorFlowModalType;
  editorModalType: string;
}

const EditorFlowModal = (props: EditorFlowModalPropsType) => {
  const { showModal, setShowModal, editorFlowModalContent, editorModalType } = props;
  const modalRef = useRef(null);

  // 커스텀 훅 활성화용 state
  const [modalBgClickActive, setModalBgClickActive] = useState(showModal);

  // 커스텀 훅 전달 함수
  const handleOutSideClick = () => {
    if (showModal && (editorModalType === 'tempSave' || editorModalType === 'exitEditPage')) {
      setModalBgClickActive(true);
    }
    if (modalBgClickActive) {
      setShowModal(false);
      setModalBgClickActive(false);
    }
  };

  // 커스텀 훅 사용
  useClickOutside(modalRef, handleOutSideClick);

  return (
    <ModalBackground $showModal={showModal}>
      <ModalWrapper ref={modalRef}>
        <ModalTitle>{editorFlowModalContent.title}</ModalTitle>
        <Spacing marginBottom="3.2" />
        {editorFlowModalContent.modalImgType === 'tempSave' && <AlertStorageIcn />}
        {editorFlowModalContent.modalImgType === 'postContent' && <AlertUploadIcn />}
        {editorFlowModalContent.modalImgType === 'editorWarn' && <AlertCautionIcon />}
        <Spacing marginBottom="3.2" />
        <BtnWrapper>
          <ModalBtn $isLeft={true} onClick={editorFlowModalContent.leftBtnFn}>
            {editorFlowModalContent.leftBtnText}
          </ModalBtn>
          <ModalBtn $isLeft={false} onClick={editorFlowModalContent.rightBtnFn}>
            {editorFlowModalContent.rightBtnText}
          </ModalBtn>
        </BtnWrapper>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default EditorFlowModal;

const ModalBackground = styled.div<{ $showModal: boolean }>`
  position: fixed;
  top: 0;
  z-index: 5;
  display: ${({ $showModal }) => ($showModal ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;

  background-color: #0009;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40rem;

  /* height: 30.8rem; */
  padding: 3.2rem 4rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;

const ModalTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray100};
  white-space: pre-wrap;
  text-align: center;
  ${({ theme }) => theme.fonts.title8};
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  width: 100%;
`;

const ModalBtn = styled.button<{ $isLeft: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15.4rem;
  height: 3.9rem;
  padding: 1rem 0;

  color: ${({ $isLeft, theme }) => ($isLeft ? theme.colors.mainViolet : theme.colors.white)};

  background-color: ${({ $isLeft, theme }) =>
    $isLeft ? theme.colors.white : theme.colors.mainViolet};
  border: 1px solid ${({ theme }) => theme.colors.mainViolet};
  border-radius: 8px;

  ${({ theme }) => theme.fonts.button2};

  &:hover {
    color: ${({ theme }) => theme.colors.mainViolet};

    background-color: ${({ theme }) => theme.colors.mileViolet};
    border: ${({ $isLeft }) => ($isLeft ? '1px solid theme.colors.mainViolet' : 'none')};
  }
`;

const AlertCautionIcon = styled(AlertCautionIcn)`
  width: 17rem;
  height: 15rem;
`;
