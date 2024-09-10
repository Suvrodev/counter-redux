import React from "react";

const PostBox = ({ post }) => {
  const { body, id, userId, title } = post;

  return (
    <div className="border p-2 rounded-md">
      <h1 className="text-xl text-center font-bold">{title}</h1>
      <div className="flex justify-between">
        <p>{id}</p>
        <p>user id: {userId}</p>
      </div>
      <div>{body}</div>
    </div>
  );
};

export default PostBox;
