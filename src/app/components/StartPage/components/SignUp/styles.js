import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  box-sizing: border-box;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  box-sizing: border-box;
  margin-bottom: 25px;
  margin-top: 18px;
  background-color: ${({ disabled }) => (disabled ? "#ffe88f" : "#ffce0c")};
  border-radius: 4px;
  width: 328px;
  height: 36px;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
  color: #333333;
  border: none;
  color: ${({ disabled }) => (disabled ? "#8a8a8a" : "#333333")};
`;

export const Link = styled.div`
  box-sizing: border-box;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #404064;
  font-family: Arial;
`;

export const WarningError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 96px;
  background: #ffe9db;
  margin-top: 24px;
`;

export const Message = styled.div`
  box-sizing: border-box;
`;

export const Title = styled.div`
  box-sizing: border-box;
  margin-top: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #404064;
  font-family: Arial;
`;

export const Span = styled.span`
  box-sizing: border-box;
  color: #3167ba;
  cursor: pointer;
`;
