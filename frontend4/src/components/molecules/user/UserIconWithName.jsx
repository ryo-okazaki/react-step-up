import styled from "styled-components";
import React, {memo, useContext} from "react";
import {UserContext} from "../../../providers/UserProvider.jsx";
import {useRecoilValue} from "recoil";
import {userState} from "../../../store/userState.js";

export const UserIconWithName = memo((props) => {
  console.log('icon')
  const {image, name} = props;
  // const {userInfo} = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImage height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  )
})

const SContainer = styled.div`
  text-align: center;
`
const SImage = styled.img`
  border-radius: 50%;
`
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`