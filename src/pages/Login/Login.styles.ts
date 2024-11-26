import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "bg-gray-100 w-screen h-screen",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  flex-direction: column;
`;

export const BackgroundContainer = styled.div.attrs({
  className: "flex w-7/12 h-1/2 shadow-md",
})``;

export const InputContainer = styled.div.attrs({
  className: "w-full pr-10 pl-10",
})`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
