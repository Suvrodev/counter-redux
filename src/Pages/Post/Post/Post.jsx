import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../PostSlice";
import PostBox from "../PostBox/PostBox";

const Post = () => {
  //   const take = useSelector((state) => state.postsR);
  const { isLoading, posts, error } = useSelector((state) => state.postsR);

  const disPatch = useDispatch();

  useEffect(() => {
    disPatch(fetchPosts());
  }, []);
  //   console.log(posts);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post, idx) => (
          <PostBox key={idx} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Post;
