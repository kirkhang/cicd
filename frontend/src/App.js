import { Button } from "antd";
import { getAllStaff } from './client.js'
import './App.css';

function App() {
  getAllStaff()
    .then(res => res.json())
    .then(console.log)
  return "React"
}

export default App;
