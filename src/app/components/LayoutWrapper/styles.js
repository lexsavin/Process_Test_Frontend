import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 1px 10px rgba(104, 121, 187, 0.1);
  & > div:nth-child(2) {
    margin-right: 28px;
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-left: 28px;
  margin-right: 16px;
`;

export const Text = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #6879bb;
  font-family: Arial;
`;

export const Group = styled.div`
  box-sizing: border-box;
  display: flex;
`;
