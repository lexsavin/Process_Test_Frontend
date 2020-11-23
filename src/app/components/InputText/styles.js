import styled from "styled-components";

export const InputUI = styled.input`
  width: 328px;
  height: 36px;
  box-sizing: border-box;
  background: #ffffff;
  border: ${({ valid }) => (valid ? "1px solid #EE4141" : "1px solid #d6dce9")};
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #6879bb;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #cccccc;
  }
  :-ms-input-placeholder {
    color: #cccccc;
  }
  :focus {
    color: #415fd5;
    border: ${({ valid }) =>
      valid ? "1px solid #EE4141" : "1px solid #415fd5"};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #ee4141;
  font-family: Arial;
`;
