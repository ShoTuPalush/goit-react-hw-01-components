import styled from 'styled-components';

export const Table = styled.table`
  width: 840px;
  margin: 0 auto;
  background-color: white;
  pading: 0;
  border: 1px solid gray;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 10px;
  background-color: turquoise;
  color: white;
  font-size: 19px;
  width: calc(100% / 3);
  border: 1px solid gray;
  border-collapse: collapse;
`;

export const Tr = styled.tr`

text-transform: capitalize;
    color: gray;
    background-color: white;
    height: 40px;
    text-align: center;

    &:nth-child(even){
        color: #5B5859;
        background-color: silver;`;

export const Td = styled.td`
  border: 1px solid gray;
  border-collapse: collapse;
`;
