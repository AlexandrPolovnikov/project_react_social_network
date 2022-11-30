import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const SinglePage = () => {
  console.log(useParams());
  const { id } = useParams();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goHome = () => navigate("/", { replace: true });

  const [post, setPosts] = useState([null]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [id]);

  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <h3>{post.body}</h3>
        </>
      )}
      <button onClick={goBack}>Go back</button>
      <button onClick={goHome}>Go home</button>
    </div>
  );
};

export default SinglePage;
