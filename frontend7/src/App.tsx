import './App.css'
import {UserCard} from "./components/UserCard";
import {useAllUsers} from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  // それぞれのカスタムフックで呼び出したステートやコンポーネントで独立
  // コンポーネント間でステートが競合することはない

  const fetchUsers = () => getUsers()

  return (
    <>
      <button onClick={fetchUsers}>データ取得</button>
      <br/>
      {error ? (
        <p style={{color: "red"}}>データの取得に失敗しました。</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
          <>
            {userProfiles.map((user: any) => (
              <UserCard key={user.id} user={user} />
            ))}
          </>
        )
      }
    </>
  )
}
