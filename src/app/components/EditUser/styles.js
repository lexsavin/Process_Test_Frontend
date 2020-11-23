import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #ebf2fb;
  height: 100vh;
`;

export const InputWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
`;

export const Button = styled.button`
  box-sizing: border-box;
  border-radius: 4px;
  width: 116px;
  height: 36px;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
  border: none;
  background-color: ${({ disabled }) => (disabled ? "#ffe88f" : "#ffce0c")};
  color: ${({ disabled }) => (disabled ? "#8a8a8a" : "#333333")};
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
  font-weight: bold;
  color: #404064;
  font-family: Arial;
  font-size: 26px;
  line-height: 35px;
`;

export const FormGroup = styled.div`
  box-sizing: border-box;
  margin: 0 20px;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding-bottom: 12px;
`;

export const TitleGroup = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ebf2fb;
  padding-top: 24px;
  padding-bottom: 12px;
  margin-bottom: 24px;
`;

export const FieldName = styled.div`
  box-sizing: border-box;
  width: 160px;
  margin-left: 24px;
  margin-right: 105px;
  font-size: 14px;
  line-height: 19px;
  color: #999999;
  font-family: Arial;
`;
