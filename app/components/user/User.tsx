import { userType } from "@/app/type/user";

type userProps = {
  user: userType;
};

export default function User({ user }: userProps) {
  return (
    <div className="flex  item-center justify-center p-4">
      <b>{user.username}</b>
      <span>({user.email})</span>
      <button
        className="px-2 py-1 ml-3 text-sm bg-red-500 text-white rounded hover:bg-red-700 mr-3"
        onClick={() => {}}
      >
        X
      </button>
    </div>
  );
}
