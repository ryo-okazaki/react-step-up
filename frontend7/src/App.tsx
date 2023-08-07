import './App.css'
import {UserCard} from "./components/UserCard";
import axios from "axios";
import {User} from "./types/api/user";
import {useState} from "react";
import {UserProfile} from "./types/UserProfile";

export default function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }))

        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

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
            {userProfiles.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </>
        )
      }
    </>
  )
}
