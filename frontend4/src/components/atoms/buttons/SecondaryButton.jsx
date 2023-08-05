import styled from "styled-components";

export const SecondaryButton = (props) => {
  const { children } = props;
  console.log(props)
  return (
    <SButton>{children}</SButton>
  )
}

const SButton = styled.button`
  background-color: #11999e;
  color: #fff;
  padding: 6px 24px;
  border-radius: 9999px;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;