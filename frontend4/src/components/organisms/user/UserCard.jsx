import styled from "styled-components";
import {Card} from "../../atoms/card/Card.jsx";
import {UserIconWithName} from "../../molecules/user/UserIconWithName.jsx";
import React, {memo} from "react";

export const UserCard = memo((props) => {
  console.log('user card')
  const {user} = props;

  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <Sdl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>Webサイト</dt>
        <dd>{user.website}</dd>
      </Sdl>
    </Card>
  )
})

const Sdl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  //  要素からはみ出たら折り返してくれる。
  }
`
