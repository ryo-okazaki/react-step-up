import styled from "styled-components";
import {BaseButton} from "./BaseButton.jsx";

export const SecondaryButton = (props) => {
  const { children } = props;
  console.log(props)
  return (
    <SButton>{children}</SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;