import styled from 'styled-components';

export const Profiles = styled.div`
  width: 399px;
  height: auto;
  background-color: white;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Avatar = styled.img`
  width: 140px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Username = styled.p`
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  margin-bottom: 14px;
`;

export const Tag = styled.p`
  text-align: center;
  font-size: 18px;
  color: gray;
  margin-bottom: 14px;
`;

export const Location = styled.p`
  text-align: center;
  font-size: 18px;
  color: gray;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  background-color: rgb(215, 223, 223);
  border: 1px solid rgb(196, 204, 204);
  padding: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.p`
  font-size: 14px;
  color: gray;
  margin-bottom: 6px;
`;

export const Quantity = styled.p`
  font-weight: 700;
  font-size: 18px;
`;
