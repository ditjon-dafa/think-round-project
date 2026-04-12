import { User } from "../lib/definitions";
import Header from "./components/header";
import UserCard from "./components/user-card";
import styles from "@/app/ui/users/users.module.css";
export default async function Page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return (
    <>
      <Header />
      <div id={styles.users_list}>
        {users.map((user: User) => {
          return <UserCard key={user.id} {...user} />;
        })}
      </div>
    </>
  );
}
