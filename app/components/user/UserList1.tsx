import { userType } from "@/app/type/user";
import User from "./User";

type userProps = {
  users: userType[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

export default function UserList1({ users, onRemove, onToggle }: userProps) {
  return (
    <div className="flex flex-col item-center justify-center p-4">
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
