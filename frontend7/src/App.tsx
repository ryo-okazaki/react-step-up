import './App.css'
import {UserCard} from "./components/UserCard";
import axios from "axios";
import {User} from "./types/api/user";
import {useState} from "react";
import {UserProfile} from "./types/UserProfile";

export default function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([])

  const fetchUsers = () => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));

        setUserProfiles(data);
      })
  }

  return (
    <>
      <button onClick={fetchUsers}>データ取得</button>
      {userProfiles.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  )
}
