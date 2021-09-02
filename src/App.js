import Post from "./components/Post";
import "./App.css";
import { useSelector } from "react-redux";
import store from "../src/redux/reduxConfig";
import AddPost from "./components/AddPost";

function App() {
  const posts = useSelector((store) => store.posts);

  return (
    <div className="wrapper">
      <AddPost />
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default App;
