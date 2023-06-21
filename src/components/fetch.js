 import { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.users);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App" style={{ "margin-right": "25px" }}>
    <table style={{
    paddingTop: '50px',
    boxSizing: 'content-box'
       
  }}>
      <tbody> 
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Maiden Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.maidenName}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>

          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

export default Fetch;