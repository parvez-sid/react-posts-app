import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import List from './components/List';
import Posts from './components/Posts';
import Post from './components/Post';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/list' element={<List />}></Route>
            <Route path='/posts' element={<Posts />}></Route>
            <Route path='/post/:postId' element={<Post />}></Route>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
