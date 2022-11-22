import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.id}. {props.post.type}
        </strong>
        <div>{props.post.title}</div>
        <div>{props.post.body}</div>
        <div>{props.post.url}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
