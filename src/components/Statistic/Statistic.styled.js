import styled from 'styled-components';

export const Statictic = styled.section`
  background-color: white;
  width: 399px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  color: gray;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  background-color: rgb(215, 223, 223);
  border: 1px solid rgb(196, 204, 204);
  padding: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 16px;
  color: white;
  margin-bottom: 6px;
`;

export const Percentage = styled.span`
  color: white;
  font-weight: 700;
  font-size: 18px;
`;
