import { User } from "@/app/lib/definitions";
export default function UserCard(user: User) {
  return (
    <div>
      {user.id}
      {user.name}
    </div>
  );
}
