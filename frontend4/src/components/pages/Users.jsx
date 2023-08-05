import styled from "styled-components";
import {SearchInput} from "../molecules/SearchInput.jsx";
import {UserCard} from "../organisms/user/UserCard.jsx";
import {SecondaryButton} from "../atoms/buttons/SecondaryButton.jsx";
import {useContext} from "react";
import {UserContext} from "../../providers/UserProvider.jsx";

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
  const {userInfo ,setUserInfo} = useContext(UserContext);
  const onclickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin })

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br/>
      <SecondaryButton onClick={onclickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`