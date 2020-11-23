import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  height: 262px;
  margin: 12px 22px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  box-sizing: border-box;
  height: 60px;
  border-bottom: 1px solid #d6dce9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 24px;
`;
export const Content = styled.div`
  box-sizing: border-box;
  margin-right: 24px;
  height: 100%;
  padding-left: 24px;
`;

export const Title = styled.div`
  box-sizing: border-box;
  margin-left: 24px;
  font-family: Arial;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  color: #6879bb;
`;

export const Link = styled.div`
  box-sizing: border-box;
  margin-right: 16px;
  font-family: Arial;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #6879bb;
`;

export const IconLink = styled.img`
  box-sizing: border-box;
  width: 7px;
  height: 11px;
`;

export const GroupLink = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
`;
export const Column = styled.div`
  box-sizing: border-box;
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Icon = styled.img`
  box-sizing: border-box;
  width: 16px;
  height: 19px;
  cursor: pointer;
`;

export const Data = styled.div`
  box-sizing: border-box;
  font-family: Arial;
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;
  color: #535374;
  margin-left: 16px;
`;

export const Text = styled.div`
  box-sizing: border-box;
  font-family: Arial;
  font-size: 12px;
  line-height: 16px;
  color: #999999;
  margin-left: 32px;
`;

export const Group = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const BlockData = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 12px 0;
`;

export const TextLeft = styled.div`
  box-sizing: border-box;
  font-family: Arial;
  font-size: 12px;
  line-height: 16px;
  color: #999999;
  margin: 10px 0;
`;

export const Date = styled.div`
  box-sizing: border-box;
  font-family: Arial;
  font-size: 12px;
  line-height: 16px;
  color: #333333;
  margin: 10px 0 10px 20px;
`;
