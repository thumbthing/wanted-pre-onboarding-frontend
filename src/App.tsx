import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Todo from "./pages/Todo";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/todo' element={<Todo />} />
    </Routes>
  );
}

export default App;
