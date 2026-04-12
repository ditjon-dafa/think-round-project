import { User } from "@/app/lib/definitions";
import styles from "@/app/ui/users/users.module.css";
export default function UserCard(user: User) {
  return (
    <div className={styles.card}>
      <h4>{user.name} </h4>
      <div>
        <div>
          {" "}
          <p> E-mail: {user.email} </p>
        </div>
        <div className={styles.user_address}>
          <div>
            <p> Address: </p>
          </div>
          <div>
            <p> Str. {user.address.street}</p>
            <p>Suite {user.address.suite} </p>
            <p>
              {" "}
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
