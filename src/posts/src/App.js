import React, { useEffect, useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/myModal/MyModal";
import { usePosts, useSortedPosts } from "./hooks/usePosts";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    const response = await axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty  "
      // "https://jsonplaceholder.typicode.com/posts"
    );
    // setPosts(response.data);
    console.log(response.data);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>GET POST</MyButton>
      <MyButton onClick={fetchPosts}>GET</MyButton>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты про JavaScript"
      />
    </div>
  );
}

export default App;
