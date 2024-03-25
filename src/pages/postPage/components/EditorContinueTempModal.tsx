import styled from '@emotion/styled';

import Spacing from '../../../components/commons/Spacing';

interface editorConinueTempModalPropsType {
  showModal: boolean;
}

const EditorContinueTempModal = (props: editorConinueTempModalPropsType) => {
  const { showModal } = props;
  return (
    <ModalBackground $showModal={showModal}>
      <ModalWrapper>
        <ModalTitle>임시 저장된 글을 계속 이어 쓸까요?</ModalTitle>
        <Spacing marginBottom="2.8" />
        <BtnWrapper>
          <ModalBtn $isTop={true}>새로 쓰기</ModalBtn>
          <ModalBtn $isTop={false}>이어 쓰기</ModalBtn>
        </BtnWrapper>
        <Spacing marginBottom="1.4" />
        <DeleteTempContentBtn>임시 저장 삭제하기</DeleteTempContentBtn>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default EditorContinueTempModal;

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
  height: 23.6rem;
  padding: 3.2rem 4rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;

const ModalTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.title8};
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  width: 100%;
`;

const ModalBtn = styled.button<{ $isTop: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32rem;
  height: 3.9rem;

  color: ${({ $isTop, theme }) => ($isTop ? theme.colors.mainViolet : theme.colors.white)};

  background-color: ${({ $isTop, theme }) =>
    $isTop ? theme.colors.white : theme.colors.mainViolet};
  border: 1px solid ${({ theme }) => theme.colors.mainViolet};
  border-radius: 8px;

  ${({ theme }) => theme.fonts.button2};

  &:hover {
    color: ${({ theme }) => theme.colors.mainViolet};

    background-color: ${({ theme }) => theme.colors.mileViolet};
    border: ${({ $isTop }) => ($isTop ? '1px solid theme.colors.mainViolet' : 'none')};
  }
`;

const DeleteTempContentBtn = styled.span`
  color: ${({ theme }) => theme.colors.gray60};

  ${({ theme }) => theme.fonts.body6};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray20};
  }
`;
