import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import Post from "./components/Post";
import Posts from "./components/Posts";

function App() {
  return (
 <div className = "App">
   <Header/>
   <Routes>
     <Route path = "/" element = { <Home/> } />
     <Route path = "/home" element = { <Home/> } />
     <Route path = "/posts" element = { <Posts/> } />
     <Route path = "/posts/:postId" element = { <Post/>}> 
      <Route path = "lorem" element = { <p>lorem</p> } />
     </Route>
   </Routes>
 </div>
    
  );
}

export default App;
