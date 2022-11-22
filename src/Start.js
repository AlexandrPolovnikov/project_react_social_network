import Technologies from "./component/header/Technologies";
import "./App.css";
import HomePage from "./component/main/HomePage";
import Header from "./component/menu/Header";
import MyPosts from "./component/myPosts/MyPosts";

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
        <HomePage />
        <MyPosts message="Мы" />
        <MyPosts message="стали" />
        <MyPosts message="забывать" />
        <MyPosts message="что" />
        <MyPosts message="настоящее" />
        <MyPosts message="русское" />
        <MyPosts message="айти" />
      </div>
    </div>
  );
}

export default App;
