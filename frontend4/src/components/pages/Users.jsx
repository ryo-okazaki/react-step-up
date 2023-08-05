import styled from "styled-components";
import {SearchInput} from "../molecules/SearchInput.jsx";

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    name: `user-${val}`,
    image: 'https://source.unsplash.com/ZCHj_2lJP00',
    email: 'test@example.com',
    phone: '090-1111-2222',
    company: {
      name: 'test株式会社',
    },
    website: 'https://google.com'
  }
}))

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`