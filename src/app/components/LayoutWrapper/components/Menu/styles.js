import styled from "styled-components";

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 28px;
  margin-right: 16px;
`;

export const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
`;

export const LeftBlock = styled.div`
  box-sizing: border-box;
  width: 224px;
  height: 100%;
  background-color: #404064;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.3);
`;

export const RightBlock = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100%;
  background-color: #20262b;
  opacity: 0.5;
`;

export const HeaderMenu = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  background: #535374;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
`;

export const TextMenu = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  font-family: Arial;
`;

export const Category = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  cursor: pointer;
`;
