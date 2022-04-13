import { useState, useEffect } from 'react'
import { getAllStaff } from './client.js'
import './App.css';

function App() {
  const [staff, setStaff] = useState([]);

  const fetchStaff = () =>
    getAllStaff()
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setStaff(data);
      })

  useEffect(() => {
    console.log("aaaaaaaaaaaaaaaaaaa");
    fetchStaff();
  }, []);

  return <p>{staff.length}</p>
}

export default App;
