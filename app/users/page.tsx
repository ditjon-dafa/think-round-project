import { User } from "../lib/definitions";
import UserCard from "./components/user-card";
export default async function Page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return (
    <>
      {users.map((user: User) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </>
  );
}
