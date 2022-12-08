import Technologies from "./component/header/Technologies";
import "./App.css";
import { Header } from "./component/menu/Header";
import { Route, Routes } from "react-router-dom";
import Dialogs from "./component/dialogs/Dialogs";
import HomePage from "./component/main/HomePage";
import Error from "./component/error/Error";
import PostPage from "./component/myPosts/PostPage";
import SinglePage from "./component/myPosts/SinglePage";
import Chat1 from "./component/dialogs/chetList/Chat1";
import Chat2 from "./component/dialogs/chetList/Chat2";
import Chat3 from "./component/dialogs/chetList/Chat3";
import DialogItem from "./component/dialogs/chetList/DialogItem";

function App(state) {
  return (
    <div className="container">
      <header className="icon-img">
        <img src="https://cdn.icon-icons.com/icons2/2596/PNG/512/check_one_icon_155665.png" />
      </header>
      <nav className="nav">
        <Technologies />
      </nav>
      <div className="content">
        <Header />
      </div>
      <div className="border">
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="dialogs" element={<Dialogs />}>
              <Route
                path="dialogs"
                render={() => <Dialogs dialogs={state.dialogs} />}
              />
              <Route path="1" element={<Chat1 />} />
              <Route path="2" element={<Chat2 />} />
              <Route path="3" element={<Chat3 />} />
            </Route>
            <Route path="posts" element={<PostPage />} />
            <Route path="posts/:id" element={<SinglePage />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
