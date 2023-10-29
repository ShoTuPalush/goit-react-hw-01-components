import { Avatar, Name, Status, Wrapper } from './Friends.styled';

export const Friend = ({ friend }) => {
  return (
    <Wrapper>
      <Status $status={friend.isOnline.toString()}></Status>
      <Avatar src={friend.avatar} alt="User Avatar" width="48" />
      <Name>{friend.name}</Name>
    </Wrapper>
  );
};
