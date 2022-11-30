import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PostFilter from "./../../posts/src/components/PostFilter";
import BlogFilter from "./BlogFilter";

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");

  const startsForm = latest ? 80 : 1;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Our news</h1>
      <BlogFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <Link
        to="/posts/new"
        style={{ margin: "1rem 0", display: "inline-block" }}
      >
        Add new Post
      </Link>
      {posts
        .filter(
          (post) => post.title.includes(postQuery) && post.id >= startsForm
        )
        .map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>
              <h3>{post.title}</h3>
            </li>
          </Link>
        ))}
    </div>
  );
};

export default PostPage;
