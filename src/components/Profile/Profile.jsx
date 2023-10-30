import {
  Profiles,
  Wrapper,
  Avatar,
  Username,
  Tag,
  Location,
  StatList,
  StatItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Profiles>
      <Wrapper>
        <Avatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Wrapper>
      <StatList>
        <StatItem>
          <Label>Followers</Label>
          <Quantity>
            {new Intl.NumberFormat('en-IN').format(followers)}
          </Quantity>
        </StatItem>
        <StatItem>
          <Label>Views</Label>
          <Quantity>{new Intl.NumberFormat('en-IN').format(views)}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes</Label>
          <Quantity>{new Intl.NumberFormat('en-IN').format(likes)}</Quantity>
        </StatItem>
      </StatList>
    </Profiles>
  );
};
