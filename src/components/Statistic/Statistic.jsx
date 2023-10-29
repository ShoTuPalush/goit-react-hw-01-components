import {
  Item,
  Label,
  List,
  Percentage,
  Statictic,
  Title,
} from './Statistic.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Statictic>
      {title != null && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} style={{ backgroundColor: randomColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Statictic>
  );
};

const randomColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};
