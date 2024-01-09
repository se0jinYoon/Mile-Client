import styled from '@emotion/styled';

import GroupInfoBox from './GroupInfoBox';
import { GroupDateIcn, GroupLeaderIcn, GroupMemberIcn } from '../../assets/svgs';
import Spacing from '../../components/commons/Spacing';

const GroupSideHeader = () => {
  return (
    <GroupSideHeaderWrapper>
      <GroupSideHeaderTitle>그룹명자리입니다</GroupSideHeaderTitle>
      <Spacing marginBottom="2.8" />
      <GroupSideHeaderLayout>
        <GroupInfoBox icon={<GroupLeaderIcn />} title="모임방장" detail="방장입니다" />
        <GroupInfoBox icon={<GroupDateIcn />} title="설립날짜" detail="24.12.25" />
        <GroupInfoBox icon={<GroupMemberIcn />} title="모임인원" detail="11명의 짜미들" />
      </GroupSideHeaderLayout>
      <Spacing marginBottom="2.4" />
      <GroupSideHeaderDetailBox>
        <DetailBoxRect />
        일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
      </GroupSideHeaderDetailBox>
    </GroupSideHeaderWrapper>
  );
};

export default GroupSideHeader;

const GroupSideHeaderTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.fonts.title3};
`;

const GroupSideHeaderWrapper = styled.div`
  width: 27.7rem;
`;

const GroupSideHeaderLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const DetailBoxRect = styled.div`
  width: 0.4rem;
  height: 7rem;

  background-color: ${({ theme }) => theme.colors.mileGreen};
  border-radius: 2px;
`;

const GroupSideHeaderDetailBox = styled.div`
  display: flex;
  gap: 1.2rem;

  color: ${({ theme }) => theme.colors.gray70};

  ${({ theme }) => theme.fonts.body2};
`;