import styled from "styled-components";
import {BaseButton} from "./BaseButton.jsx";

export const SecondaryButton = (props) => {
  console.log('sec button')
  const { children, onClick } = props;
  return (
    <SButton onClick={onClick}>{children}</SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;