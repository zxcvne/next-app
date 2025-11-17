import { userType } from "@/app/type/user";
import React from "react";

type userProps = {
  user: userType;
  onRemove: (id: number) => void;
};

export default function User({ user, onRemove }: userProps) {
  return (
    <div className="flex  item-center justify-center p-4">
      <b>{user.username}</b>
      <span>({user.email})</span>
      <button
        className="px-2 py-1 ml-3 text-sm bg-red-500 text-white rounded hover:bg-red-700 mr-3"
        onClick={() => {
          onRemove(user.id);
        }}
      >
        X
      </button>
    </div>
  );
}
