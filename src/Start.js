import Technologies from "./component/header/Technologies";
import "./App.css";
import { Header } from "./component/menu/Header";
import { Route, Routes } from "react-router-dom";
import Dialogs from "./component/dialogs/Dialogs";
import MyPosts from "./component/myPosts/MyPosts";
import HomePage from "./component/main/HomePage";
import Error from "./component/error/Error";

function App() {
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
            <Route path="dialogs" element={<Dialogs />} />
            <Route path="posts" element={<MyPosts />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
