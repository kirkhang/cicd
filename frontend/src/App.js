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

  if (staff.length < 1) {
    return "no data";
  }
  return staff.map( (st, index) => {
    return <p key = {index}>{st.id} {st.name}</p>
  })
}

export default App;
